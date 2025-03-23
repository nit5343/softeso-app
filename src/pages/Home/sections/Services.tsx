import React from 'react';
import { Link } from 'react-router-dom';
import { MdCode, MdPhoneIphone, MdPalette, MdArrowForward, MdCloud } from 'react-icons/md';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import Grid from '../../../components/ui/Grid';
import Card from '../../../components/ui/Card';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';
import { ROUTES } from '../../../constants/routes';

const services = [
  {
    icon: MdCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    link: ROUTES.SERVICES.WEB_DEVELOPMENT
  },
  {
    icon: MdPhoneIphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    link: ROUTES.SERVICES.MOBILE_DEVELOPMENT
  },
  {
    icon: MdPalette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging digital experiences.',
    link: ROUTES.SERVICES.UI_UX_DESIGN
  },
  {
    icon: MdCloud,
    title: 'Cloud Services & DevOps',
    description: 'Comprehensive cloud solutions, CI/CD pipelines, and infrastructure automation.',
    link: ROUTES.SERVICES.CLOUD_DEVOPS
  }
];

const Services = () => (
  <Section className="bg-white">
    <MotionWrapper animation="fadeIn" viewport className="text-center mb-20">
      <Typography variant="h2" className="mb-6">Our Services</Typography>
      <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
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
          <Card className="flex flex-col border border-gray-100 h-full duration-500 group hover:-translate-y-2 hover:border-primary-500/20 hover:shadow-primary-500/5 hover:shadow-xl transition-all">
            <div className="mb-6">
              <Icon 
                icon={service.icon} 
                size={48} 
                className="text-primary-500 duration-500 group-hover:scale-110 group-hover:text-primary-600 transform transition-all" 
              />
            </div>
            <Typography variant="h3" className="mb-4">{service.title}</Typography>
            <Typography className="flex-grow text-gray-600 mb-6">{service.description}</Typography>
            <Link 
              to={service.link}
              className="flex justify-between text-primary-500 duration-300 font-semibold group-hover:text-primary-600 items-center transition-all"
            >
              Learn More 
              <MdArrowForward 
                size={20} 
                className="duration-300 group-hover:translate-x-1 transform transition-all"
              />
            </Link>
          </Card>
        </MotionWrapper>
      ))}
    </Grid>
  </Section>
);

export default Services;