import React from 'react';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import Typography from '../../components/ui/Typography';
import Grid from '../../components/ui/Grid';
import Card from '../../components/ui/Card';
import MotionWrapper from '../../components/ui/MotionWrapper';

const CONTENT = {
  hero: {
    title: 'UI/UX Design',
    subtitle: 'Creating beautiful and functional digital experiences'
  },
  description: `We craft intuitive and engaging user experiences that delight your customers and drive business results. 
    Our design process combines aesthetic excellence with user-centered methodologies to create interfaces that are both 
    beautiful and functional. We focus on understanding your users' needs and behaviors to deliver designs that exceed expectations.`,
  process: {
    title: 'Our Design Process',
    subtitle: 'A user-centered approach to creating exceptional experiences',
    phases: [
      {
        title: 'Research & Discovery',
        steps: [
          'User Research',
          'Competitor Analysis',
          'User Personas',
          'User Journey Mapping'
        ]
      },
      {
        title: 'Design & Prototyping',
        steps: [
          'Wireframing',
          'UI Design',
          'Interactive Prototypes',
          'Usability Testing'
        ]
      }
    ]
  },
  tools: {
    title: 'Design Tools We Use',
    subtitle: 'Industry-standard tools for professional design',
    items: [
      { name: 'Figma', description: 'Collaborative design' },
      { name: 'Adobe XD', description: 'Prototyping tool' },
      { name: 'Sketch', description: 'Vector editing' },
      { name: 'InVision', description: 'Interactive prototypes' }
    ]
  }
} as const;

const UIUXDesign = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="UI/UX Design Services"
        description="User-centered design solutions that create engaging digital experiences."
        keywords={[
          "UI design",
          "UX design",
          "user interface",
          "user experience",
          "web design",
          "app design",
          "interaction design"
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

      {/* Design Process Section */}
      <Section className="bg-gray-50">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.process.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.process.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={2} className="items-stretch">
          {CONTENT.process.phases.map((phase, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <Typography variant="h3" className="mb-6">{phase.title}</Typography>
                <ul className="flex-grow space-y-4">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="flex items-center">
                      <span className="flex bg-primary-500 h-8 justify-center rounded-full text-white w-8 items-center mr-4">
                        {i + 1}
                      </span>
                      <Typography>{step}</Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>

      {/* Tools Section */}
      <Section className="bg-white">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.tools.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.tools.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={4} className="items-stretch">
          {CONTENT.tools.items.map((tool, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full text-center">
                <Typography variant="h3" className="mb-2">{tool.name}</Typography>
                <Typography className="flex-grow text-gray-600">{tool.description}</Typography>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default UIUXDesign;