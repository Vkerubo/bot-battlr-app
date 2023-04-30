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

  //add bot to army
  function handleAddFromArmyBot(bot) {
    setArmy([...army, bot]);
  }

  //remove bot from army
  function handleRemoveFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  //discharge bot from army
  function handleDischarge(bot) {
    setBots([
      ...bots.map((b) => {
        if (b.id === bot.id) {
          return { ...b, in_army: false };
        } else {
          return b;
        }
      }),
    ]);
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  //render app component
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
    </div>
  );
}

export default App;
