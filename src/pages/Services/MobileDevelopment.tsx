import React from 'react';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import Typography from '../../components/ui/Typography';
import Grid from '../../components/ui/Grid';
import Card from '../../components/ui/Card';
import MotionWrapper from '../../components/ui/MotionWrapper';

const CONTENT = {
  hero: {
    title: 'Mobile Development',
    subtitle: 'Creating engaging mobile experiences for iOS and Android'
  },
  description: `Transform your mobile vision into reality with our comprehensive mobile development services. 
    We create intuitive, high-performance mobile applications that engage users and drive business growth. 
    Our expertise spans across native and cross-platform development, ensuring your app delivers the best 
    possible experience on every device.`,
  platforms: {
    title: 'Development Approaches',
    subtitle: 'Choose the perfect development approach for your mobile app',
    options: [
      {
        title: 'Native Development',
        description: 'Platform-specific apps with optimal performance',
        features: ['Swift for iOS', 'Kotlin for Android', 'Native UI Components', 'Best Performance']
      },
      {
        title: 'Cross-Platform',
        description: 'Single codebase for multiple platforms',
        features: ['React Native', 'Flutter', 'Faster Development', 'Cost-Effective']
      },
      {
        title: 'Progressive Web Apps',
        description: 'Web apps with native-like experience',
        features: ['Offline Support', 'Push Notifications', 'App-like Interface', 'Easy Updates']
      }
    ]
  },
  features: {
    title: 'App Features We Deliver',
    subtitle: 'Comprehensive mobile solutions for modern businesses',
    items: [
      { title: 'User Authentication', description: 'Secure login and user management' },
      { title: 'Offline Mode', description: 'Work without internet connection' },
      { title: 'Push Notifications', description: 'Real-time updates and alerts' },
      { title: 'Analytics', description: 'Track user behavior and metrics' }
    ]
  }
} as const;

const MobileDevelopment = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Mobile App Development"
        description="Native and cross-platform mobile application development for iOS and Android."
        keywords={[
          "mobile app development",
          "iOS development",
          "Android development",
          "React Native",
          "Flutter",
          "cross-platform apps"
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

      {/* Platforms Section */}
      <Section className="bg-gray-50">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.platforms.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.platforms.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={3} className="items-stretch">
          {CONTENT.platforms.options.map((platform, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <Typography variant="h3" className="mb-4">{platform.title}</Typography>
                <Typography className="text-gray-600 mb-6">{platform.description}</Typography>
                <ul className="flex-grow text-gray-600 space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-primary-500 h-2 rounded-full w-2 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>

      {/* Features Section */}
      <Section className="bg-white">
        <MotionWrapper animation="fadeIn" viewport className="text-center mb-16">
          <Typography variant="h2" className="text-gradient mb-4">{CONTENT.features.title}</Typography>
          <Typography className="text-gray-600 text-xl max-w-2xl mx-auto">
            {CONTENT.features.subtitle}
          </Typography>
        </MotionWrapper>

        <Grid cols={4} className="items-stretch">
          {CONTENT.features.items.map((feature, index) => (
            <MotionWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.2}
              viewport
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <Typography variant="h3" className="mb-2">{feature.title}</Typography>
                <Typography className="flex-grow text-gray-600">{feature.description}</Typography>
              </Card>
            </MotionWrapper>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default MobileDevelopment;