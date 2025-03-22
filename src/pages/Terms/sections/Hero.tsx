import React from 'react';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';

const Hero = () => (
  <Section className="bg-gradient">
    <MotionWrapper animation="fadeInUp" className="text-center">
      <Typography variant="h1" className="text-white mb-6">Terms & Conditions</Typography>
      <Typography className="text-xl text-white/90 max-w-2xl mx-auto">
        Please read these terms carefully before using our services
      </Typography>
    </MotionWrapper>
  </Section>
);

export default Hero;