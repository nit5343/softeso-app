import React from 'react';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import Typography from '../../components/ui/Typography';
import Grid from '../../components/ui/Grid';
import Card from '../../components/ui/Card';
import MotionWrapper from '../../components/ui/MotionWrapper';

const CONTENT = {
  hero: {
    title: 'Cloud & DevOps',
    subtitle: 'Modernize your infrastructure and streamline development'
  },
  description: `Accelerate your digital transformation with our comprehensive cloud and DevOps solutions. 
    We help organizations build scalable, secure, and efficient infrastructure while implementing 
    automated deployment pipelines that speed up development and reduce errors. Our expertise ensures 
    your systems are reliable, performant, and cost-effective.`,
  services: {
    title: 'Our Services',
    subtitle: 'End-to-end cloud and DevOps solutions',
    categories: [
      {
        title: 'Cloud Infrastructure',
        services: [
          'Cloud Migration',
          'Infrastructure as Code',
          'Serverless Architecture',
          'Cost Optimization'
        ]
      },
      {
        title: 'DevOps Automation',
        services: [
          'CI/CD Pipeline Setup',
          'Container Orchestration',
          'Configuration Management',
          'Monitoring & Logging'
        ]
      },
      {
        title: 'Security & Compliance',
        services: [
          'Security Automation',
          'Compliance Monitoring',
          'Access Management',
          'Vulnerability Scanning'
        ]
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    subtitle: 'Industry-leading tools and platforms',
    tools: [
      { name: 'AWS', category: 'Cloud Platform' },
      { name: 'Kubernetes', category: 'Orchestration' },
      { name: 'Terraform', category: 'IaC' },
      { name: 'Jenkins', category: 'CI/CD' }
    ]
  }
} as const;

const CloudDevOps = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Cloud & DevOps Services"
        description="Comprehensive cloud solutions, CI/CD pipelines, and infrastructure automation."
        keywords={[
          "cloud services",
          "DevOps",
          "CI/CD",
          "infrastructure automation",
          "cloud architecture",
          "containerization"
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

      {/* Services Section */}
      <Section className="bg-gray-50">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.services.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.services.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={3} className="items-stretch">
          {CONTENT.services.categories.map((category, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <Typography variant="h3" className="mb-6">{category.title}</Typography>
                <ul className="flex-grow space-y-4">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-primary-500 h-2 rounded-full w-2 mr-2" />
                      <Typography>{service}</Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>

      {/* Technologies Section */}
      <Section className="bg-white">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.technologies.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.technologies.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={4} className="items-stretch">
          {CONTENT.technologies.tools.map((tech, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full text-center">
                <Typography variant="h3" className="mb-2">{tech.name}</Typography>
                <Typography className="flex-grow text-gray-600">{tech.category}</Typography>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default CloudDevOps;