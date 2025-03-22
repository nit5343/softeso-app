import React from 'react';
import SEO from '../../components/SEO';
import Hero from './sections/Hero';
import VisionMission from './sections/VisionMission';
import Team from './sections/Team';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="About Us"
        description="Learn about Softeso's journey, our expert team, and our commitment to delivering innovative software solutions."
        keywords={[
          "about Softeso",
          "software company",
          "development team",
          "tech experts",
          "software professionals",
          "company vision",
          "company mission"
        ]}
      />
      <Hero />
      <VisionMission />
      <Team />
    </div>
  );
};

export default About;