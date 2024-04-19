import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({Tasks}) {

  const [TaskList, setTaskList] = useState(Tasks);

  function handleDeleteTask(taskId)
  {
    const updatedTask = TaskList.filter((task) => task.id !== taskId)
    setTaskList(updatedTask);
  };

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {Tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;