import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
  className?: string;
  delay?: number;
  viewport?: boolean;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  animation = 'fadeIn',
  className,
  delay = 0,
  viewport = false
}) => {
  const animationProps = {
    ...animations[animation],
    transition: {
      ...animations[animation].transition,
      delay
    },
    ...(viewport ? { viewport: { once: true } } : {})
  };

  return (
    <motion.div
      className={className}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;