import React, { useState } from "react";

// NewTodo is a child component that receives a handler from its parent (Home)
// to add new todos. This demonstrates state lifting: the state is managed in the parent,
// but updated from the child via a function prop.
const NewTodo = (props) => {
  // Local state for the input field
  const [todo, setTodo] = useState("");

  // Update local state as the user types
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  // When the form is submitted, call the handler from props to add the new todo
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form
    props.onTodo(todo); // pass the todo to the parent component
    // Optionally clear the input after submit
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo: </label>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={todo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
