import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const [formValues, setFormValues] = useState({
    category: "",
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.text.trim() !== "") {
      onTaskFormSubmit(formValues);
      setFormValues({ category: "", text: "" });
    }
  };

  const handleChange = (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formValues.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          {/* render <option> elements for each category here */}
          {CATEGORIES.filter((category) => category !== "All").map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;