// import { useEffect, useState } from "react";
// import {
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Input,
//   UncontrolledDropdown,
// } from "reactstrap";

export const RecipeFilterBar = ({
  setSearchCategoryId,
  setSearchMealId,
  setSearchTerm,
  categories,
  meals,
}) => {
  return (
    <div className="filter-bar">
      <div>
        <input
          type="text"
          placeholder="Search Recipes"
          className="recipe-search"
          name="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <select
          id="category-search"
          onChange={(event) => {
            setSearchCategoryId(parseInt(event.target.value));
          }}
        >
          <option value="0">Filter by category...</option>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <select
          id="meal-search"
          onChange={(event) => {
            setSearchMealId(parseInt(event.target.value));
          }}
        >
          <option value="0">Filter by meal...</option>
          {meals.map((meal) => {
            return (
              <option value={meal.id} key={meal.id}>
                {meal.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

// <div>
//   <Input placeholder="Search recipes" />

//   <div className="d-flex p-5">
//     <UncontrolledDropdown>
//       <DropdownToggle caret>Filter by category</DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Categories</DropdownItem>
//         {categories.map((category) => {
//           return <DropdownItem>{category.name}</DropdownItem>;
//         })}
//       </DropdownMenu>
//     </UncontrolledDropdown>

//     <UncontrolledDropdown>
//       <DropdownToggle caret>Filter by meal</DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Meal</DropdownItem>
//         {meals.map((category) => {
//           return <DropdownItem>{category.name}</DropdownItem>;
//         })}
//       </DropdownMenu>
//     </UncontrolledDropdown>
//   </div>
// </div>
