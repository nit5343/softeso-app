import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import Section from '../../../components/ui/Section';
import Grid from '../../../components/ui/Grid';
import Card from '../../../components/ui/Card';
import Typography from '../../../components/ui/Typography';
import Input from '../../../components/ui/Input';
import Textarea from '../../../components/ui/Textarea';
import Button from '../../../components/ui/Button';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import { COMPANY } from '../../../config/company';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      reset(); // Clear the form
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <Grid cols={2}>
        <MotionWrapper animation="fadeInLeft">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              
              <Input
                label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                error={errors.email?.message}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              
              <Textarea
                label="Message"
                {...register("message", { required: "Message is required" })}
                error={errors.message?.message}
                rows={4}
                placeholder="How can we help you?"
                disabled={isSubmitting}
              />
              
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <Button 
                type="submit" 
                icon={MdSend} 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </MotionWrapper>

        <MotionWrapper animation="fadeInRight">
          <Card>
            <Typography variant="h2" className="text-gradient mb-6">Contact Information</Typography>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MdEmail className="flex-shrink-0 h-6 text-primary-600 w-6 mt-1" />
                <div>
                  <Typography variant="h4">Email</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.email}</Typography>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MdPhone className="flex-shrink-0 h-6 text-primary-600 w-6 mt-1" />
                <div>
                  <Typography variant="h4">Phone</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.phone}</Typography>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MdLocationOn className="flex-shrink-0 h-6 text-primary-600 w-6 mt-1" />
                <div>
                  <Typography variant="h4">Address</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.address}</Typography>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Typography variant="h4" className="mb-4">Business Hours</Typography>
              <ul className="text-gray-600 space-y-2">
                <li>Monday - Friday: {COMPANY.businessHours.weekday}</li>
                <li>Saturday: {COMPANY.businessHours.saturday}</li>
                <li>Sunday: {COMPANY.businessHours.sunday}</li>
              </ul>
            </div>
          </Card>
        </MotionWrapper>
      </Grid>
    </Section>
  );
};

export default ContactForm;