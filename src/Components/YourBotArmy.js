import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  // Create an array of Bot components from the army array
  const botList = army.map((bot) => (
    <Bot
      key={bot.id}
      bot={bot}
      onRemoveFromArmy={onRemoveFromArmy}
      onDischarge={onDischarge}
    />
  ));

  // Render the YourBotArmy component
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {botList.length > 0 ? (
        botList
      ) : (
        <p className="no-bots-message">Oops! No bots in your army.</p>
      )}
    </div>
  );
}

export default YourBotArmy;
