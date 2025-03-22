import React from 'react';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';

const Content = () => (
  <Section>
    <MotionWrapper animation="fadeInUp">
      <div className="prose prose-lg max-w-4xl mx-auto">
        <section className="mb-8">
          <Typography variant="h2" className="mb-4">1. Service Satisfaction</Typography>
          <Typography>
            At Softeso, we are committed to delivering high-quality software solutions. If you are not satisfied with our services, please contact us immediately to discuss your concerns.
          </Typography>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">2. Refund Eligibility</Typography>
          <Typography>
            Refunds may be considered on a case-by-case basis within 30 days of service delivery. The following conditions must be met:
          </Typography>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>The service does not meet the agreed-upon specifications</li>
            <li>Technical issues that cannot be resolved</li>
            <li>Breach of service agreement by Softeso</li>
          </ul>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">3. Refund Process</Typography>
          <Typography>To request a refund:</Typography>
          <ol className="list-decimal pl-6 text-gray-600 mb-4">
            <li>Contact our support team</li>
            <li>Provide detailed explanation of the issue</li>
            <li>Submit any relevant documentation</li>
            <li>Allow up to 5 business days for review</li>
          </ol>
        </section>

        <section className="mb-8">
          <Typography variant="h2" className="mb-4">4. Non-Refundable Items</Typography>
          <Typography>The following are not eligible for refunds:</Typography>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Completed and delivered custom software development</li>
            <li>Services where specifications have been met</li>
            <li>Cancellations after project completion</li>
          </ul>
        </section>
      </div>
    </MotionWrapper>
  </Section>
);

export default Content;