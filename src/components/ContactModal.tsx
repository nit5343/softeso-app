import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import Typography from './ui/Typography';
import { useForm } from 'react-hook-form';

// Bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  requirements: string;
  timeline: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formFields = [
        { label: 'Service Required', value: data.service },
        { label: 'Budget Range', value: data.budget },
        { label: 'Timeline', value: data.timeline },
        { label: 'Project Requirements', value: data.requirements }
      ];

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          fields: formFields
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your project request. We will get back to you soon!'
      });
      reset();
      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: null, message: '' });
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-8 rounded-2xl shadow-2xl w-full -translate-x-1/2 -translate-y-1/2 fixed left-1/2 max-w-xl outline-none top-1/2"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h2" className="text-gradient">
          Let's Start Your Project
        </Typography>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          disabled={isSubmitting}
        >
          <MdClose size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={errors.name?.message}
            disabled={isSubmitting}
          />
          <Input
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            error={errors.email?.message}
            disabled={isSubmitting}
          />
        </div>

        <Select
          label="Service Required"
          {...register("service", { required: "Please select a service" })}
          error={errors.service?.message}
          disabled={isSubmitting}
          options={[
            { value: '', label: 'Select a service' },
            { value: 'Web Development', label: 'Web Development' },
            { value: 'Mobile App Development', label: 'Mobile App Development' },
            { value: 'UI/UX Design', label: 'UI/UX Design' },
            { value: 'Other', label: 'Other' }
          ]}
        />

        <Select
          label="Budget Range"
          {...register("budget", { required: "Please select a budget range" })}
          error={errors.budget?.message}
          disabled={isSubmitting}
          options={[
            { value: '', label: 'Select budget range' },
            { value: '$5,000 - $10,000', label: '$5,000 - $10,000' },
            { value: '$10,000 - $25,000', label: '$10,000 - $25,000' },
            { value: '$25,000 - $50,000', label: '$25,000 - $50,000' },
            { value: '$50,000+', label: '$50,000+' }
          ]}
        />

        <Textarea
          label="Project Requirements"
          {...register("requirements", { required: "Please describe your requirements" })}
          error={errors.requirements?.message}
          rows={4}
          placeholder="Please describe your project requirements..."
          disabled={isSubmitting}
        />

        <Select
          label="Expected Timeline"
          {...register("timeline", { required: "Please select a timeline" })}
          error={errors.timeline?.message}
          disabled={isSubmitting}
          options={[
            { value: '', label: 'Select timeline' },
            { value: '1-3 months', label: '1-3 months' },
            { value: '3-6 months', label: '3-6 months' },
            { value: '6-12 months', label: '6-12 months' },
            { value: '12+ months', label: '12+ months' }
          ]}
        />

        {submitStatus.type && (
          <div className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-700' 
              : 'bg-red-50 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
      </form>
    </Modal>
  );
};

export default ContactModal;