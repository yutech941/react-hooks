import "./App.css";
import React, { createContext, useState } from "react";
import CounterReducer from "./components/CouterReducer";

function App() {
  return (
    <div className="App">
      <CounterReducer />
    </div>
  );
}

export default App;
