import React from 'react';
import Section from '../../../components/ui/Section';
import Grid from '../../../components/ui/Grid';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';

const technologies = [
  { name: 'React', icon: Fa.FaReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: Si.SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: Fa.FaNodeJs, color: '#339933' },
  { name: 'Python', icon: Fa.FaPython, color: '#3776AB' },
  { name: 'Docker', icon: Fa.FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: Fa.FaAws, color: '#232F3E' },
  { name: 'MongoDB', icon: Si.SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: Si.SiPostgresql, color: '#4169E1' },
  { name: 'Redis', icon: Si.SiRedis, color: '#DC382D' },
  { name: 'TailwindCSS', icon: Si.SiTailwindcss, color: '#06B6D4' }
];

const Technologies = () => (
  <Section className="bg-gray-50">
    <MotionWrapper animation="fadeIn" viewport className="text-center mb-20">
      <Typography variant="h2" className="mb-6">Technologies We Use</Typography>
      <Typography className="text-xl text-gray-600 max-w-2xl mx-auto">
        We leverage the latest technologies to build robust solutions
      </Typography>
    </MotionWrapper>

    <Grid cols={5}>
      {technologies.map((tech, index) => (
        <MotionWrapper
          key={tech.name}
          animation="fadeInUp"
          delay={index * 0.1}
          viewport
          className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110">
            <Icon icon={tech.icon} size={64} className={`text-[${tech.color}]`} style={{ '--icon-color': tech.color } as React.CSSProperties} />
          </div>
          <Typography className="text-sm font-medium" style={{ color: tech.color }}>
            {tech.name}
          </Typography>
        </MotionWrapper>
      ))}
    </Grid>

    <MotionWrapper
      animation="fadeIn"
      viewport
      className="text-center mt-12"
    >
      <Typography className="text-lg text-gray-600 italic">
        And many more...
      </Typography>
    </MotionWrapper>
  </Section>
);

export default Technologies;