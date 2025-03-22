import React from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '../../../components/ui/Section';
import Typography from '../../../components/ui/Typography';
import MotionWrapper from '../../../components/ui/MotionWrapper';

const stats = [
  { number: 200, label: 'Projects Completed', suffix: '+' },
  { number: 60, label: 'Happy Clients', suffix: '+' },
  { number: 10, label: 'Years Experience', suffix: '+' }
];

const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 3500; // 3.5 seconds
    const startValue = 0;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easeInOutQuad easing function for smoother animation
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const currentValue = Math.round(startValue + (endValue - startValue) * easeProgress);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

const Stats = () => (
  <Section className="bg-primary-700 bg-pattern text-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <MotionWrapper
          key={index}
          animation="fadeInUp"
          delay={index * 0.1}
          viewport
          className="text-center"
        >
          <Typography variant="h2" className="mb-2">
            <AnimatedNumber value={stat.number} suffix={stat.suffix} />
          </Typography>
          <Typography className="text-lg text-white/80">{stat.label}</Typography>
        </MotionWrapper>
      ))}
    </div>
  </Section>
);

export default Stats;