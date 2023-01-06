import React from "react";
import Setup from "./tutorial/11-react-router/setup";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./tutorial/11-react-router/setup/Navbar";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Setup />
      </Router>
    </div>
  );
}

export default App;
