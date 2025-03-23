import React, { forwardRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string; }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="text-gray-700 text-sm block font-medium mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
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
          <div className="text-gray-500 -translate-y-1/2 absolute pointer-events-none right-3 top-1/2">
            <MdKeyboardArrowDown size={24} />
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;