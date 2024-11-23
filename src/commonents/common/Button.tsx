import React from 'react';
import { ButtonProps } from '../interfaces/interfaceMain';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const Button: React.FC<LoadingButtonProps> = ({ text, onClick, loading = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-1/4 mt-4 py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white 
                  font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out 
                  focus:outline-none focus:ring-4 focus:ring-indigo-300 
                  flex items-center justify-center gap-3 relative overflow-hidden 
                  ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'}`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      )}
      <span>{ text}</span>
    </button>
  );
};

export default Button;
