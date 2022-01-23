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

  function handleDelete(event){
    const selectedTaskText = (event.target.parentElement.children[1].innerText)
    setTasks(tasks.filter((task) => {
      return task.text !== selectedTaskText
    }))
  }

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

  function onTaskFormSubmit(details, category){
    console.log(details, category)
    const newTask = {
      text: details,
      category: category
    }

    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasksByCategory = {filterTasksByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
      <Task/>
    </div>
  );
}

export default App;
