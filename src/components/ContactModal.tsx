import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import Typography from './ui/Typography';

// Bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 outline-none"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h2" className="text-gradient">
          Let's Start Your Project
        </Typography>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <MdClose size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Name"
            id="name"
            type="text"
            required
          />
          <Input
            label="Email"
            id="email"
            type="email"
            required
          />
        </div>

        <Select
          label="Service Required"
          id="service"
          required
          options={[
            { value: '', label: 'Select a service' },
            { value: 'web', label: 'Web Development' },
            { value: 'mobile', label: 'Mobile App Development' },
            { value: 'ui', label: 'UI/UX Design' },
            { value: 'other', label: 'Other' }
          ]}
        />

        <Select
          label="Budget Range"
          id="budget"
          required
          options={[
            { value: '', label: 'Select budget range' },
            { value: 'small', label: '$5,000 - $10,000' },
            { value: 'medium', label: '$10,000 - $25,000' },
            { value: 'large', label: '$25,000 - $50,000' },
            { value: 'enterprise', label: '$50,000+' }
          ]}
        />

        <Textarea
          label="Project Requirements"
          id="requirements"
          rows={4}
          required
          placeholder="Please describe your project requirements..."
        />

        <Select
          label="Expected Timeline"
          id="timeline"
          required
          options={[
            { value: '', label: 'Select timeline' },
            { value: '1-3', label: '1-3 months' },
            { value: '3-6', label: '3-6 months' },
            { value: '6-12', label: '6-12 months' },
            { value: '12+', label: '12+ months' }
          ]}
        />

        <Button type="submit" className="w-full">
          Submit Request
        </Button>
      </form>
    </Modal>
  );
};

export default ContactModal;