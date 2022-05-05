import React from "react";
import "./App.css";
import Check from "./components/Check";
import Count from "./components/Count";
import DocTitleUpdateOne from "./components/DocTitleUpdateOne";
import DocTitleUpdateTwo from "./components/DocTitleUpdateTwo";
import FocusInput from "./components/FocusInput";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <DocTitleUpdateOne />
      <DocTitleUpdateTwo />
    </div>
  );
}

export default App;
