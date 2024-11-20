import React from 'react';
import { StatusDropdownProps } from '../interfaces/interfaceMain';



const StatusDropdown: React.FC<StatusDropdownProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-32 px-4 py-2 mt-1 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-md hover:bg-indigo-100"
    >
      <option value="Active" className="py-2">Active</option>
      <option value="Inactive" className="py-2">Inactive</option>
      <option value="Pending" className="py-2">Pending</option>
    </select>
  );
};

export default StatusDropdown;
