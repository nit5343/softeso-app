import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

interface FormField {
  label: string;
  value: string;
}

interface EmailData {
  name: string;
  email: string;
  fields: FormField[];
}

// Import the template directly as a string
const emailTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(to right, #1287C1, #0C516E);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .section {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e7eb;
    }
    .section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .label {
      font-weight: bold;
      color: #1287C1;
      margin-bottom: 5px;
      display: block;
    }
    .value {
      color: #4b5563;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #6b7280;
      font-size: 0.875rem;
    }
    @media (max-width: 600px) {
      .container {
        width: 100%;
        padding: 10px;
      }
      .header, .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">New Project Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">A new inquiry has been submitted through the website</p>
    </div>
    <div class="content">
      <div class="section">
        <span class="label">Contact Information</span>
        <p class="value">
          <strong>Name:</strong> {{name}}<br>
          <strong>Email:</strong> {{email}}
        </p>
      </div>
      
      {{#each fields}}
      <div class="section">
        <span class="label">{{this.label}}</span>
        <p class="value">{{this.value}}</p>
      </div>
      {{/each}}
    </div>
    <div class="footer">
      <p>This email was sent from the Softeso website contact form.</p>
    </div>
  </div>
</body>
</html>`;

// Compile the template
const template = Handlebars.compile(emailTemplate);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const data: EmailData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!data.email || !data.name || !Array.isArray(data.fields)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Generate HTML using the template
    const html = template(data);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Request on Softeso Website from ${data.name} (${data.email})`,
      html
    };

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