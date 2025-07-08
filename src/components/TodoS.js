import React from "react";
import Todo from "./Todo";

// TodoS receives the todos array as a prop from its parent (Home)
// and renders each todo using the Todo component.
// This demonstrates state lifting: the data is managed in Home and passed down.
const TodoS = (props) => {
  return (
    <div>
      {props.todoSArray.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} />
        // key is used to identify the todo item in the list
        // todo is a prop that is passed from TodoS to Todo
      ))}
    </div>
  );
};

export default TodoS;
