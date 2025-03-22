import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string; }>;
}

const Select: React.FC<SelectProps> = ({ label, error, options, className, id, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={cn(
            "block w-full px-4 h-10 rounded-lg border-2 border-neutral-300",
            "bg-white/50",
            "shadow-sm",
            "appearance-none",
            "pr-10", // Add padding for the icon
            "focus:border-primary-500 focus:ring focus:ring-primary-500/20",
            "transition duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <MdKeyboardArrowDown size={24} />
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Select;