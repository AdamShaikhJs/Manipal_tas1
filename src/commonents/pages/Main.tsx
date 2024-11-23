import React, { useState, useEffect } from "react";
import Table from "../common/Table";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import StatusDropdown from "../common/StatusDropdown";
import { Task } from "../interfaces/interfaceMain";
import SearchBar from "../common/SearchBar";
import useDebounce from "../../customHooks/useDebounce";
import { data } from "../constant/Constant";
import Pagination from "../common/Pagination";
const headers = ["Sr.No", "Task", "Status", "Actions"];

const Main: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>(data);
  const [loading, setLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(5);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.text.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [debouncedSearchQuery, tasks]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value); 
  };

  // add/update
  const handleSubmit = (): void => {
    if (message.trim()) {
      setLoading(true);
      setTimeout(() => {
        if (editTask) {
          const updatedTasks = tasks.map((task) =>
            task.id === editTask.id ? { ...task, text: message } : task
          );
          setTasks(updatedTasks);
          setEditTask(null);
        } else {
          const newTask = {
            id: Date.now(),
            text: message,
            status: "Pending",
          };
          setTasks([newTask,...tasks]);
        }
        setMessage("");
        setLoading(false);
      }, 2000);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 6000);
    }
  };

  // edit
  const handleEdit = (id: number): void => {
    const edit = tasks.find((task) => task.id === id);
    if (edit) {
      setEditTask(edit);
      setMessage(edit.text);
    }
  };

  // Delete
  const handleDelete = (id: number): void => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  // status
  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedStatus = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedStatus);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = filteredTasks.slice(
    startIndex,
    startIndex + tasksPerPage
  );

  const renderActions = (id: number, status: string) => (
    <div className="flex space-x-4 mx-2 items-center overflow-x-auto">
      <StatusDropdown
        value={status}
        onChange={(newStatus) => handleStatusChange(id, newStatus)}
      />
      <button
        onClick={() => handleEdit(id)}
        className="px-4 py-2 bg-yellow-200 text-gray-800 rounded-md shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
      >
        🖋️
      </button>
      <button
        onClick={() => handleDelete(id)}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition  hover:scale-105"
      >
        🪣
      </button>
    </div>
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };




  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center bg-gradient-to-r from-teal-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-all duration-300 ease-in-out">
        ⏱️ Task Management ⏱️
      </h1>

      <div className="mb-6"></div>

      {/* Form Section */}
      <div className="w-full p-4 sm:p-6 bg-white shadow-lg rounded-lg my-6">
        <SearchBar onSearch={handleSearch} />
        <Textarea
          label={editTask ? "Edit Task" : "Add New Task"}
          value={message}
          onChange={handleTextChange}
          placeholder="Type your task here......✏️"
          error={isError}
        />

        <div className="flex justify-center items-center">
          <Button
            text={
              loading
                ? "Processing..."
                : editTask
                ? "👍 Update Task"
                : "Add Task"
            }
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
      </div>

      <div className="w-full p-2 sm:p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">📃 No tasks found.</p>
        ) : (
          <>
            <Table
              headers={headers}
              data={currentTasks.map((item, index) => ({
                ...item,
                actions: renderActions(item.id, item.status),
                srNo: startIndex + index + 1,
              }))}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
