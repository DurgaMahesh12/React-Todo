import React from 'react';

const InputField = ({ task, setTask, addTask }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center w-full">
 
      <input
        type="text"
        className="flex-grow w-full sm:w-3/4 px-4 py-3 rounded-md bg-gray-100 text-gray-800 
                   border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={addTask}
        className="px-8 py-3 bg-cyan-500 text-white rounded-md text-base font-medium 
                   shadow-md hover:bg-cyan-600 transform hover:-translate-y-1 
                   duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        AddTask
      </button>
    </div>
  );
};

export default InputField;
