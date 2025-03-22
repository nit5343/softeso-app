import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
      className
    )}>
      {children}
    </div>
  );
};

export default Card;