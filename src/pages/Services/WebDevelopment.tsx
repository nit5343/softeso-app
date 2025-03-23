import React from 'react';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import Typography from '../../components/ui/Typography';
import Grid from '../../components/ui/Grid';
import Card from '../../components/ui/Card';
import MotionWrapper from '../../components/ui/MotionWrapper';

const CONTENT = {
  hero: {
    title: 'Web Development',
    subtitle: 'Building modern, scalable, and performant web applications'
  },
  description: `We specialize in creating robust web applications that drive business growth. 
    Our expert team combines technical excellence with creative problem-solving to deliver 
    solutions that exceed expectations. From simple websites to complex enterprise applications, 
    we ensure your web presence stands out in the digital landscape.`,
  techStack: {
    title: 'Our Tech Stack',
    subtitle: 'We use cutting-edge technologies to deliver exceptional results',
    stacks: [
      { title: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'TypeScript'] },
      { title: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
      { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] }
    ]
  },
  process: {
    title: 'Our Development Process',
    subtitle: 'A systematic approach to delivering high-quality web solutions',
    steps: [
      { title: 'Discovery', description: 'Understanding your requirements and objectives' },
      { title: 'Planning', description: 'Creating detailed technical specifications and roadmap' },
      { title: 'Development', description: 'Building your solution with regular updates' },
      { title: 'Deployment', description: 'Testing, optimization, and launch' }
    ]
  }
} as const;

const WebDevelopment = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Web Development Services"
        description="Custom web application development services using modern technologies and best practices."
        keywords={[
          "web development",
          "custom web applications",
          "frontend development",
          "backend development",
          "full stack development",
          "responsive design"
        ]}
      />

      {/* Hero Section */}
      <Section className="bg-gradient">
        <MotionWrapper animation="fadeInUp" className="text-center">
          <Typography variant="h1" className="text-white mb-6">{CONTENT.hero.title}</Typography>
          <Typography className="text-white/90 text-xl max-w-2xl mx-auto">
            {CONTENT.hero.subtitle}
          </Typography>
        </MotionWrapper>
      </Section>

      {/* Description Section */}
      <Section className="bg-white">
        <MotionWrapper animation="fadeIn" viewport className="text-center">
          <Typography className="text-gray-600 text-xl max-w-3xl mx-auto">
            {CONTENT.description}
          </Typography>
        </MotionWrapper>
      </Section>

      {/* Technologies Section */}
      <Section className="bg-gray-50">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.techStack.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.techStack.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={3} className="items-stretch">
          {CONTENT.techStack.stacks.map((stack, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full text-center">
                <Typography variant="h3" className="mb-4">{stack.title}</Typography>
                <ul className="flex-grow text-gray-600 space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>

      {/* Process Section */}
      <Section className="bg-white">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.process.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.process.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={4} className="items-stretch">
          {CONTENT.process.steps.map((step, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className="text-4xl text-primary-500 font-bold mb-4">{index + 1}</div>
                <Typography variant="h3" className="mb-2">{step.title}</Typography>
                <Typography className="flex-grow text-gray-600">{step.description}</Typography>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default WebDevelopment;