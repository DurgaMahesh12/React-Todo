import React from 'react';
import TodoItem from './ElemenytHandle';

const TodoList = ({ todos, toggleCompletion, deleteTask, editTask }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
