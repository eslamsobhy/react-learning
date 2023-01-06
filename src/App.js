import React from "react";
import Setup from "./tutorial/11-react-router/setup";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        {" "}
        <Setup />
      </Router>
    </div>
  );
}

export default App;
