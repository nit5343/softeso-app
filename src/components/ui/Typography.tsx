import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm';
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant = 'body',
  as: Component = 'p'
}) => {
  const variants = {
    h1: "text-4xl md:text-5xl font-bold font-display",
    h2: "text-3xl md:text-4xl font-bold font-display",
    h3: "text-2xl font-bold font-display",
    h4: "text-xl font-bold font-display",
    body: "text-base",
    'body-sm': "text-sm"
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;