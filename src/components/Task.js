import React from "react";

function Task({task, onDelete}) {
  const {id, category, text} = task;

  const handleDelete = () => {
    onDelete(task);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete}  className="delete">X</button>
    </div>
  );
}

export default Task;
