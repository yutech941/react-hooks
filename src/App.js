import "./App.css";
import MouseEventEffect from "./components/MouseEventEffect";
// import EffectHook from "./components/EffectHook";
// import DataFetch from "./components/DataFetch";
import DataFetchById from "./components/DataFetchById";

function App() {
  return (
    <div className="App">
      {/* <DataFetch /> */}
      <DataFetchById />
    </div>
  );
}

export default App;
