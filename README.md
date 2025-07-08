# Part 29 - React Todo Application

This project is a simple React application demonstrating the concept of state lifting. It allows users to add and display a list of todos.

## Project Structure

- **src/**: Contains the source code for the React application.
  - **components/**: Contains the React components used in the application.
    - **Home.js**: Manages the main state for todos and demonstrates state lifting by passing state and handlers to child components.
    - **NewTodo.js**: A form component that allows users to add new todos. It receives a handler from its parent to update the state.
    - **TodoS.js**: Receives the list of todos as a prop and renders each todo using the Todo component.
    - **Todo.js**: Displays a single todo item.
- **public/**: Contains the public assets and the main HTML file.
- **package.json**: Lists the project dependencies and scripts.

## Key Concepts

- **State Lifting**: The main state (todos) is managed in the `Home` component. The `NewTodo` component can update this state via a function prop, demonstrating state lifting.
- **Component Hierarchy**: The `App` component renders `Home`, which manages state and passes data and handlers to `NewTodo` and `TodoS`.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the necessary packages.
2. **Run the Application**: Use `npm start` to start the development server and view the application in your browser.

## Usage

- Add a new todo by typing in the input field and clicking "Add".
- The list of todos will update to show the new item.
