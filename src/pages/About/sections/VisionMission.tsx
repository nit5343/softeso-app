import React from 'react';
import { FaBullseye, FaAward } from 'react-icons/fa';
import Section from '../../../components/ui/Section';
import Grid from '../../../components/ui/Grid';
import Card from '../../../components/ui/Card';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Icon from '../../../components/ui/Icon';

const VisionMission = () => (
  <Section>
    <Grid cols={2}>
      <MotionWrapper animation="fadeInLeft" viewport>
        <Card>
          <Icon icon={FaBullseye} size={48} className="text-primary-500 mb-6" />
          <Typography variant="h3" className="mb-4">Our Vision</Typography>
          <Typography className="text-gray-600">
            To be the leading innovator in software development, creating solutions that empower businesses and enhance user experiences worldwide.
          </Typography>
        </Card>
      </MotionWrapper>

      <MotionWrapper animation="fadeInRight" viewport>
        <Card>
          <Icon icon={FaAward} size={48} className="text-primary-500 mb-6" />
          <Typography variant="h3" className="mb-4">Our Mission</Typography>
          <Typography className="text-gray-600">
            To deliver exceptional software solutions that drive digital transformation and create lasting value for our clients through innovation and expertise.
          </Typography>
        </Card>
      </MotionWrapper>
    </Grid>
  </Section>
);

export default VisionMission