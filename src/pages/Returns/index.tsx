import React from 'react';
import SEO from '../../components/SEO';
import Hero from './sections/Hero';
import Content from './sections/Content';

const Returns = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Returns & Refund Policy"
        description="Understand Softeso's returns and refund policy for our software development services."
        keywords={[
          "refund policy",
          "returns policy",
          "service satisfaction",
          "money back guarantee",
          "software development refunds"
        ]}
      />
      <Hero />
      <Content />
    </div>
  );
};

export default Returns;