import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  withContainer = true
}) => {
  const content = withContainer ? (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
      {children}
    </div>
  ) : children;

  return (
    <section className={cn("py-20", className)}>
      {content}
    </section>
  );
};

export default Section;