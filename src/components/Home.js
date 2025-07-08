import React, { useState } from "react";
import TodoS from "./TodoS";
import NewTodo from "./NewTodo";

// Home.js is the parent component that manages the todos state.
// This is the "lifted state" that is shared with child components.
const Home = () => {
  // Initial todos array
  const todoSArray = ["todo1", "todo2", "todo3"];
  // todoS is the state variable that stores the array of todos
  // setTodoS is the function to update the todos state
  const [todoS, setTodoS] = useState(todoSArray);

  // This function is passed to NewTodo as a prop.
  // It allows NewTodo (a child) to update the todos state in Home (the parent).
  const handleNewTodo = (newTodo) => {
    setTodoS([...todoS, newTodo]);
    console.log(newTodo);
  };

  return (
    <div>
      {/* Pass the handler to NewTodo so it can add new todos */}
      <NewTodo onTodo={handleNewTodo} />
      {/* Pass the current todos state to TodoS for rendering */}
      <TodoS todoSArray={todoS} />
      {/* parent to child data/props passing */}
    </div>
  );
};

export default Home;
