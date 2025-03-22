import React from 'react';
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
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
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
              />
              
              <Textarea
                label="Message"
                {...register("message", { required: "Message is required" })}
                error={errors.message?.message}
                rows={4}
                placeholder="How can we help you?"
              />
              
              <Button type="submit" icon={MdSend} className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </MotionWrapper>

        <MotionWrapper animation="fadeInRight">
          <Card>
            <Typography variant="h2" className="text-gradient mb-6">Contact Information</Typography>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MdEmail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <Typography variant="h4">Email</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.email}</Typography>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MdPhone className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <Typography variant="h4">Phone</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.phone}</Typography>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MdLocationOn className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <Typography variant="h4">Address</Typography>
                  <Typography className="text-gray-600">{COMPANY.contact.address}</Typography>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Typography variant="h4" className="mb-4">Business Hours</Typography>
              <ul className="space-y-2 text-gray-600">
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