import React from 'react';
import SEO from '../../components/SEO';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Technologies from './sections/Technologies';
import ContactUsSection from './sections/ContactUsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        description="Transform your ideas into reality with Softeso's innovative software solutions. We specialize in web development, mobile apps, and cloud services."
        keywords={[
          "software development",
          "web applications",
          "mobile apps",
          "cloud services",
          "digital transformation",
          "custom software",
          "IT solutions",
          "software company"
        ]}
      />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <ContactUsSection />
    </div>
  );
};

export default Home;