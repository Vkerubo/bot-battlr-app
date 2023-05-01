import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army &&
        army.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            inArmy={true}
            onRemoveFromArmy={onRemoveFromArmy}
            onDischarge={onDischarge}
          />
        ))}
    </div>
  );
}

export default YourBotArmy;
