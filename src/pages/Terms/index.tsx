import React from 'react';
import SEO from '../../components/SEO';
import Hero from './sections/Hero';
import Content from './sections/Content';

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Terms & Conditions"
        description="Read Softeso's terms and conditions for using our software development services and website."
        keywords={[
          "terms and conditions",
          "legal terms",
          "service terms",
          "usage policy",
          "software development terms"
        ]}
      />
      <Hero />
      <Content />
    </div>
  );
};

export default Terms;