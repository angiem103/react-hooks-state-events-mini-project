import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {


  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("Code")

  function handleDetails(event){
    setDetails(event.target.value)
  }

  function handleCategory(event){
    setCategory(event.target.value)
  }

  function renderCategories(){
      return categories.map(category => {
        if (category !== "All") {
        return (
        <option key={category} value={category}>{category}</option>
         )
        } return null
      })
    }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit( details, category)

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {renderCategories()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
