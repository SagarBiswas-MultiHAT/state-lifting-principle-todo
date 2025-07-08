// App.js is the root component. It renders the Home component.
// The main state (todos) is managed in Home.js, demonstrating state lifting.
import Home from "./components/Home";

// App.js -> Home.js (manages todos state) -> passes data and handlers to child components
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
