import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  //create array of bot components from army array
  const botList = army.map((bot) => (
    <Bot
      key={bot.id}
      bot={bot}
      onDischarge={onDischarge}
      onAddToArmy={onRemoveFromArmy}
    />
  ));

  //render YourBotArmy component
  return <div>YourBotArmy</div>;
}

export default YourBotArmy;
