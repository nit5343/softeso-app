import React from 'react';
import { IconType } from 'react-icons';
import { cn } from '../../utils/cn';

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, className }) => {
  return <IconComponent size={size} className={cn("", className)} />;
};

export default Icon;