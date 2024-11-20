import React from 'react';
import { ButtonProps } from '../interfaces/interfaceMain';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-1/4 mt-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md 
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default Button;
