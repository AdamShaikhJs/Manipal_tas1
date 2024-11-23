import React from "react";
import { TextareaProps } from "../interfaces/interfaceMain";

interface ExtendedTextareaProps extends TextareaProps {
  error?: boolean; 
}

const Textarea: React.FC<ExtendedTextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-indigo-500"
        }`}
      />
      {error && (
        <p className="mt-2 text-center text-sm text-red-500 animate-bounce">
          ⚠️ Please enter your task first ! 
        </p>
      )}
    </div>
  );
};

export default Textarea;
