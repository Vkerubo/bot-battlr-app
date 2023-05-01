import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  // Initialize state for bots and army
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  // Initialize state for which component to render
  const [renderComponent, setRenderComponent] = useState(null);

  // Fetch bots data from server
  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  // Add bot to army
  function handleAddToArmy(bot) {
    setBots(
      bots.map((b) => {
        if (b.id === bot.id) {
          return { ...b, in_army: true };
        } else {
          return b;
        }
      })
    );
    setArmy([...army, bot]);
  }

  // Remove bot from army and delete bot from backend
  function handleDischarge(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
    setBots(
      bots.map((b) => {
        if (b.id === bot.id) {
          return { ...b, in_army: false };
        } else {
          return b;
        }
      })
    );
    fetch(`http://localhost:8000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleRemoveFromArmy(botToRemove) {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botToRemove.id));
    setBots(
      bots.map((b) => {
        if (b.id === botToRemove.id) {
          return { ...b, in_army: false };
        } else {
          return b;
        }
      })
    );
  }

  // Render the BotCollection or YourBotArmy component based on the button clicked
  function handleButtonClick(component) {
    setRenderComponent(component);
  }

  // Render the selected component or a default message if no component is selected
  let componentToRender;
  if (renderComponent === "BotCollection") {
    componentToRender = (
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
    );
  } else if (renderComponent === "YourBotArmy") {
    componentToRender = (
      <YourBotArmy army={army} onRemoveFromArmy={handleRemoveFromArmy} />
    );
  } else {
    componentToRender = <p>Welcome to The Bot Battler</p>;
  }

  // Render the App component with buttons to toggle the component to render
  return (
    <div className="App">
      <button onClick={() => handleButtonClick("BotCollection")}>
        Bot collection
      </button>
      <button onClick={() => handleButtonClick("YourBotArmy")}>
        My Bot Army
      </button>
      {componentToRender}
    </div>
  );
}

export default App;
