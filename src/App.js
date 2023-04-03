import "./App.css";
import Switch from "./components/Switch";
import Header from "./components/header/Header";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
library.add(faShuttleSpace);

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="container ">
        <div className="switchs">
          <Switch switchButton={switch1} setSwitch={setSwitch1} />
          <Switch switchButton={switch2} setSwitch={setSwitch2} />
          <Switch switchButton={switch3} setSwitch={setSwitch3} />
        </div>

        <div
          className={`ready ${switch1 && switch2 && switch3 ? "go" : "no-way"}`}
        >
          {switch1 && switch2 && switch3 ? "Go!" : "No way"}
        </div>
      </div>
    </div>
  );
}

export default App;
