import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // This should be an app-specific password
  }
});

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const { name, email, message, service, budget, timeline, requirements } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email content with improved formatting
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Project Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .section { margin-bottom: 20px; }
              .label { font-weight: bold; color: #2c5282; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Project Request</h2>
                <p>A new project request has been submitted through the website.</p>
              </div>
              
              <div class="section">
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
                ${service ? `<p><span class="label">Service Required:</span> ${service}</p>` : ''}
                ${budget ? `<p><span class="label">Budget Range:</span> ${budget}</p>` : ''}
                ${timeline ? `<p><span class="label">Timeline:</span> ${timeline}</p>` : ''}
              </div>
              
              ${requirements ? `
                <div class="section">
                  <p><span class="label">Project Requirements:</span></p>
                  <p>${requirements}</p>
                </div>
              ` : ''}
              
              <div class="section">
                <p><span class="label">Message:</span></p>
                <p>${message}</p>
              </div>
            </div>
          </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        success: true
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false
      })
    };
  }
};