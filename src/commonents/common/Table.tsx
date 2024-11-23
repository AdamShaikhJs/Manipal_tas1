
import { TableProps } from "../interfaces/interfaceMain";

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-left rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gradient-to-r from-teal-500 to-pink-500 text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-3 px-6 font-semibold text-sm uppercase tracking-wide text-center"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition-colors duration-300 ease-in-out"
            >
              <td className="py-3 px-6 text-center">{row.srNo}</td>
              <td className="py-3 px-6 text-center">{row.text}</td>
              <td className="py-3 px-6 text-center">
                <span
                  className={`${
                    row.status === "Active"
                      ? "bg-green-500 text-white"
                      : row.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                  } py-1 px-3 rounded-full text-xs`}
                >
                  {row.status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">{row.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
