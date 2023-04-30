import React from "react";
import Bot from "./Bot";

//function component that renders a collection of Bot army
function YourBotArmy({ army, onRemoveFromArmy }) {
  //map list of bots to Bot components
  const botList = army.map((bot) => (
    <Bot key={bot.id} bot={bot} onRemoveFromArmy={onRemoveFromArmy} />
  ));

  //render collection of bot army
  return;
  <div className="your-bot-army">{botList}</div>;
}

export default YourBotArmy;
