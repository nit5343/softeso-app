import React, { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import ContactModal from '../../../components/ContactModal';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button';
import MotionWrapper from '../../../components/ui/MotionWrapper';

const ContactUsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section className="bg-primary-700 bg-pattern text-white" withContainer>
        <MotionWrapper animation="fadeIn" viewport className="text-center">
          <Typography variant="h2" className="mb-6">Ready to Start Your Project?</Typography>
          <Typography className="text-xl mb-10 text-white/90">
            Let's work together to bring your vision to life
          </Typography>
          <Button
            variant="secondary"
            icon={MdArrowForward}
            onClick={() => setIsModalOpen(true)}
            className="mx-auto"
          >
            Contact Us Now
          </Button>
        </MotionWrapper>
      </Section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactUsSection;