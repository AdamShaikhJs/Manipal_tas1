import React from 'react';
import { FaArrowLeft, FaArrowRight, FaStepBackward, FaStepForward } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
        {/* first button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        <FaStepBackward />
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        <FaArrowLeft />
      </button>

      <span className="text-gray-700 font-semibold">
        {`Page ${currentPage} of ${totalPages}`}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        <FaArrowRight />
      </button>

     {/* last button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        <FaStepForward />
      </button>
    </div>
  );
};

export default Pagination;
