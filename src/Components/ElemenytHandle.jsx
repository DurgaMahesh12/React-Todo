import React from 'react';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, toggleCompletion, deleteTask, editTask, index }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
        todo.completed ? 'bg-green-600' : 'bg-gray-700'
      }`}
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleCompletion(index)}
          className="text-gray-500 hover:text-cyan-700 text-xl"
        >
          <FaCheckCircle />
        </button>
        <span
          className={`text-white text-lg ${todo.completed ? 'line-through' : ''}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editTask(index)}
          className="text-yellow-500 hover:text-yellow-700"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
