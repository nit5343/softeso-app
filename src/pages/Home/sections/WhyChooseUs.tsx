import React from 'react';
import { FaRocket, FaCheckCircle, FaUsers, FaGlobe, FaMicrochip, FaAward } from 'react-icons/fa';
import Section from '../../../components/ui/Section';
import Grid from '../../../components/ui/Grid';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';

const features = [
  { icon: FaRocket, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
  { icon: FaCheckCircle, title: 'Quality Assured', description: 'Rigorous testing and quality control' },
  { icon: FaUsers, title: 'Expert Team', description: 'Skilled professionals with diverse expertise' },
  { icon: FaGlobe, title: 'Global Reach', description: 'Serving clients worldwide with local support' },
  { icon: FaMicrochip, title: 'Latest Tech', description: 'Using cutting-edge technologies' },
  { icon: FaAward, title: 'Award Winning', description: 'Recognized for excellence in service' }
];

const WhyChooseUs = () => (
  <Section className="bg-neutral-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        alt="Background Pattern"
        className="w-full h-full object-cover"
      />
    </div>

    <MotionWrapper animation="fadeIn" viewport className="text-center mb-20">
      <Typography variant="h2" className="mb-6">Why Choose Softeso?</Typography>
      <Typography className="text-xl text-neutral-300 max-w-2xl mx-auto">
        We combine innovation with expertise to deliver exceptional results
      </Typography>
    </MotionWrapper>

    <Grid cols={3}>
      {features.map((item, index) => (
        <MotionWrapper
          key={index}
          animation="fadeInUp"
          delay={index * 0.1}
          viewport
          className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-primary-500 transition duration-300"
        >
          <Icon icon={item.icon} size={24} className="text-primary-400 mb-4" />
          <Typography variant="h3" className="mb-2">{item.title}</Typography>
          <Typography className="text-neutral-400">{item.description}</Typography>
        </MotionWrapper>
      ))}
    </Grid>
  </Section>
);

export default WhyChooseUs;