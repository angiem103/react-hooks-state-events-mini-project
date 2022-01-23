import React from "react";
import Task from "./Task.js"

function TaskList({tasks, setTasks}) {



  function handleDelete(event){
    const selectedTaskText = (event.target.parentElement.children[1].innerText)
    setTasks(tasks.filter((task) => {
      return task.text !== selectedTaskText
    }))
  }



  function renderTasks() {
    return tasks.map(task =>{ 
      return (
        <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
      )
    })
  } 

  return (
    <div className="tasks">
      {renderTasks()}
    </div>
  );
}

export default TaskList;
