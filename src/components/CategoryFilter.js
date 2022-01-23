import React from "react";


function CategoryFilter({categories, filterTasksByCategory}) {

  function selectedButton(event){

    let siblings = [...event.target.parentElement.children]

    siblings.map((sibling) => {
      return sibling.className = ""
    })
    event.target.className = "selected"
    filterTasksByCategory(event)
  }


  function renderCategories(){
    return categories.map(category => {
      return (
        <button key={category} onClick ={selectedButton}>{category}</button>
      )
    })
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories()}
    </div>
  );
}

export default CategoryFilter;
