import React, { useState } from "react";
import Table from "../common/Table";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import StatusDropdown from "../common/StatusDropdown";
import { Task } from "../interfaces/interfaceMain";

const headers = ["Sr.No", "Task", "Status", "Actions"];

const Main: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [editTask, setEditTask] = useState<Task | null>(null);

  // all Data
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Html/css", status: "Active" },
    { id: 2, text: "JavaScript", status: "Pending" },
    { id: 3, text: "React.js", status: "Pending" },
  ]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  
  // add/update
  const handleSubmit = (): void => {
    if (message.trim()) {
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
        setTasks([...tasks, newTask]);
      }
      setMessage("");
    } else {
      alert("Please enter a message!");
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

  //status
  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedStatus = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedStatus);
  };

  const renderActions = (id: number, status: string) => (
    <div className="flex space-x-4 mx-2 items-center">
      <StatusDropdown
        value={status}
        onChange={(newStatus) => handleStatusChange(id, newStatus)}
      />
      <button
        onClick={() => handleEdit(id)}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(id)}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center bg-gradient-to-r from-teal-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-all duration-300 ease-in-out">
        Task Management
      </h1>

      {/* Form Section */}
      <div className="w-full p-4 sm:p-6 bg-white shadow-lg rounded-lg my-6">
        <Textarea
          label={editTask ? "Edit Task" : "Add New Task"}
          value={message}
          onChange={handleTextChange}
          placeholder="Type your task here......✏️"
        />

        <div className="flex justify-center items-center">
          <Button
            text={editTask ? "👍 Update Task" : "Add Task"}
            onClick={handleSubmit}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full p-4 sm:p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
        <Table
          headers={headers}
          data={tasks.map((item, index) => ({
            ...item,
            actions: renderActions(item.id, item.status),
            srNo: index + 1,
          }))}
        />
      </div>
    </div>
  );
};

export default Main;
