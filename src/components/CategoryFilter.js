import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          key={category.id}
          className={selectedCategory === category.name ? "selected" : ""}
          onClick={() => handleClick(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;