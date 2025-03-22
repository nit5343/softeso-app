import React from 'react';
import { MdCode, MdPhoneIphone, MdPalette, MdArrowForward, MdCloud } from 'react-icons/md';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import Grid from '../../../components/ui/Grid';
import Card from '../../../components/ui/Card';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';

const services = [
  {
    icon: MdCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: MdPhoneIphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: MdPalette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging digital experiences.'
  },
  {
    icon: MdCloud,
    title: 'Cloud Services & DevOps',
    description: 'Comprehensive cloud solutions, CI/CD pipelines, and infrastructure automation.'
  }
];

const Services = () => (
  <Section className="bg-white">
    <MotionWrapper animation="fadeIn" viewport className="text-center mb-20">
      <Typography variant="h2" className="mb-6">Our Services</Typography>
      <Typography className="text-xl text-gray-600 max-w-2xl mx-auto">
        We offer comprehensive software solutions tailored to your needs
      </Typography>
    </MotionWrapper>

    <Grid cols={2}>
      {services.map((service, index) => (
        <MotionWrapper
          key={index}
          animation="fadeInUp"
          delay={index * 0.2}
          viewport
        >
          <Card className="group border border-gray-100 hover:border-primary-500/20 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/5">
            <div className="mb-6">
              <Icon 
                icon={service.icon} 
                size={48} 
                className="text-primary-500 transition-all duration-500 transform group-hover:scale-110 group-hover:text-primary-600" 
              />
            </div>
            <Typography variant="h3" className="mb-4">{service.title}</Typography>
            <Typography className="text-gray-600 mb-6 flex-grow">{service.description}</Typography>
            <button className="text-primary-500 font-semibold flex items-center gap-2 transition-all duration-300 group-hover:text-primary-600 mt-auto">
              Learn More 
              <MdArrowForward 
                size={20} 
                className="transform transition-all duration-300 group-hover:translate-x-1"
              />
            </button>
          </Card>
        </MotionWrapper>
      ))}
    </Grid>
  </Section>
);

export default Services;