import React from "react";
import TodoList from "./components/TodoList"; 

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My React Todo App</h1>
      <TodoList /> {/* Render TodoList */}
    </div>
  );
}

export default App;
