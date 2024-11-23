import React, { useState } from "react";


interface SearchBarProps {
  onSearch: (value: string) => void; 
  errorMessage?: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  errorMessage = "",
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); 
  };

  return (
    <div className="w-full flex justify-center items-center mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder = "Search your task..... 🔍"
        className={`w-1/2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 hover:scale-105 transition-all duration-300 ease-in-out ${
          errorMessage
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-indigo-500"
        }`}
      />
      {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
