import React from 'react';
import { IconType } from 'react-icons';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 flex items-center";
  
  const variants = {
    primary: "bg-gradient text-white hover:opacity-90",
    secondary: "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        iconPosition === 'right' ? 'justify-between' : 'justify-start gap-2',
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} />}
    </button>
  );
};

export default Button;