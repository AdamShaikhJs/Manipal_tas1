import {TableProps} from "../interfaces/interfaceMain"
  const Table: React.FC<TableProps> = ({ headers, data }) => {
    return (
      <table className="w-full table-auto text-left">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 font-semibold text-sm text-gray-700 text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 text-center">{row.srNo}</td>
              <td className="py-2 px-4 text-center">{row.text}</td>
              <td className="py-2 px-4 text-center">{row.status}</td>
              <td className="py-2 pl-5 text-center">{row.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  