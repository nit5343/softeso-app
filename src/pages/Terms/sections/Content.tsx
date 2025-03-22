import React from 'react';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';

const Content = () => (
  <Section>
    <MotionWrapper animation="fadeInUp">
      <div className="prose prose-lg max-w-4xl mx-auto">
        <section className="mb-8">
          <Typography variant="h2" className="mb-4">1. Introduction</Typography>
          <Typography>
            Welcome to Softeso. By accessing and using our website and services, you agree to be bound by these terms and conditions.
          </Typography>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">2. Services</Typography>
          <Typography>
            Softeso provides web development, mobile app development, and UI/UX design services. The specific details, deliverables, and timelines will be outlined in individual project agreements.
          </Typography>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">3. Intellectual Property</Typography>
          <Typography>
            All intellectual property rights in relation to our services and website content remain the property of Softeso unless explicitly stated otherwise in writing.
          </Typography>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">4. Privacy</Typography>
          <Typography>
            We are committed to protecting your privacy. Any personal information collected will be handled in accordance with our Privacy Policy.
          </Typography>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">5. Limitation of Liability</Typography>
          <Typography>
            Softeso shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </Typography>
        </section>
      </div>
    </MotionWrapper>
  </Section>
);

export default Content;