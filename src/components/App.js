import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task.js"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")

  function filterTasksByCategory(event){
      setFilterBy(event.target.innerText)
  }

  const filteredTasks = (
    tasks.filter((task) => {
      if(filterBy === "All") {
        return true
      } else {
        return filterBy === task.category
      }
    })
  )


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasksByCategory = {filterTasksByCategory}/>
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} setTasks ={setTasks}/>
      <Task/>
    </div>
  );
}

export default App;
