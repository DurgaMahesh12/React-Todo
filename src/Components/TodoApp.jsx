import React, { useState } from 'react';
import InputField from './InputField';
import TodoList from './TodoList';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].text = task;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: task, completed: false }]);
      }
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(todos[index].text); 
    setEditIndex(index); 
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (editIndex === index) {
      setTask('');
      setEditIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">Todo List</h1>
        <InputField task={task} setTask={setTask} addTask={addTask} />
        <TodoList
          todos={todos}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
};

export default TodoApp;
