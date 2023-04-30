import React from "react";

function Bot({ bot, onAddToArmy, onDischarge }) {
  //function to add bot to army when clicked
  function handleClick() {
    onAddToArmy(bot);
  }

  //render Bot component
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong>
        {bot.health}
      </p>
      <p>
        <strong>Damage:</strong>
        {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong>
        {bot.armor}
      </p>
    </div>
  );
}

export default Bot;
