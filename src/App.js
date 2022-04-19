import "./App.css";
import React, { createContext, useState } from "react";
import MouseEventEffect from "./components/MouseEventEffect";
// import EffectHook from "./components/EffectHook";
// import DataFetch from "./components/DataFetch";
import DataFetchById from "./components/DataFetchById";
import ComponentC from "./components/ComponentC";

export const UserContext = createContext();
export const LanguageContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "yamda", age: "32" });
  const [language, setLanguage] = useState("日本語");
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
