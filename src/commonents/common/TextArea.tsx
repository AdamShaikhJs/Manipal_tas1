import React from 'react';
import { TextareaProps } from '../interfaces/interfaceMain';

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  rows = 4, 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default Textarea;
