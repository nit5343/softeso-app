import React from 'react';
import SEO from '../../components/SEO';
import Hero from './sections/Hero';
import ContactForm from './sections/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Contact Us"
        description="Get in touch with Softeso for your software development needs. We're here to help transform your ideas into reality."
        keywords={[
          "contact Softeso",
          "software development services",
          "get in touch",
          "software consultation",
          "project inquiry",
          "software solutions contact"
        ]}
      />
      <Hero />
      <ContactForm />
    </div>
  );
};

export default Contact;