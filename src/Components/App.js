import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  //initialize state for bots and army
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  //fetch bots data from server
  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((response) => response.json)
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  //render app component
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
    </div>
  );
}

export default App;
