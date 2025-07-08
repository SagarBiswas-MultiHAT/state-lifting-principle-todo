import React from "react";

// Todo receives a single todo and its index as props from TodoS.
// It simply displays the todo. This is the leaf in the state lifting pattern.
const Todo = (props) => {
  return (
    <div>
      <p>
        the [todo{props.index + 1}] is: {props.todo}
      </p>
    </div>
  );
};

export default Todo;
