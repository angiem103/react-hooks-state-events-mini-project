import React, { useState } from "react";

function NewTaskForm({categories}) {

  const [detais, setDetails] = useState("")
  const [category, setCategory] = useState("")

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

  return (
    <form className="new-task-form">
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
