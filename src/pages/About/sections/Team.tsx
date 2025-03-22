import React from 'react';
import { MdPerson } from 'react-icons/md';
import Section from '../../../components/ui/Section';
import Grid from '../../../components/ui/Grid';
import Card from '../../../components/ui/Card';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';

const team = [
  {
    name: 'Pratima Kumari',
    title: 'Founder',
    role: 'Marketing & Strategy',
    gender: 'female'
  },
  {
    name: 'Nitish Kumar',
    role: 'Fullstack Software Developer',
    gender: 'male'
  },
  {
    name: 'Shyam Agarwal',
    role: 'Fullstack Software Developer',
    gender: 'male'
  },
  {
    name: 'Adarsh Aman',
    role: 'Fullstack Software Developer',
    gender: 'male'
  },
  {
    name: 'Vishal Singh',
    role: 'Fullstack Software Developer',
    gender: 'male'
  },
  {
    name: 'Aditya Singh',
    role: 'Senior DevOps',
    gender: 'male'
  }
];

const Team = () => (
  <Section className="bg-gray-50">
    <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
      <Typography variant="h2" className="text-gradient mb-4">Our Core Team</Typography>
      <Typography className="text-xl text-gray-600 max-w-2xl mx-auto">
        Meet the talented individuals who make Softeso great
      </Typography>
    </MotionWrapper>

    <Grid cols={3}>
      {team.map((member, index) => (
        <MotionWrapper
          key={index}
          animation="fadeInUp"
          delay={index * 0.2}
          viewport
        >
          <Card className="h-full flex flex-col overflow-hidden group">
            <div className="aspect-square bg-gradient flex items-center justify-center p-8 transition-all duration-500 group-hover:scale-105">
              <Icon 
                icon={MdPerson}
                size={120} 
                className="text-white/90"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <Typography variant="h3" className="mb-1 line-clamp-1">
                  {member.name}
                  {member.title && (
                    <span className="text-primary-600 text-sm font-normal ml-2">
                      ({member.title})
                    </span>
                  )}
                </Typography>
                <Typography className="text-primary-600 font-medium line-clamp-1">
                  {member.role}
                </Typography>
              </div>
            </div>
          </Card>
        </MotionWrapper>
      ))}
    </Grid>

    <MotionWrapper
      animation="fadeIn"
      viewport
      className="text-center mt-16"
    >
      <Typography className="text-lg text-gray-600">
        And many more talented developers, designers, and professionals who contribute to our success...
      </Typography>
    </MotionWrapper>
  </Section>
);

export default Team;