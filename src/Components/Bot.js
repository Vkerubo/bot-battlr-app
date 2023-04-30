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
      <p>
        <strong>catchphrase:</strong>
        {bot.catchphrase}
      </p>
      <img src={bot.avatar_url} alt={bot.name} />
      {/*render add to army or discharge button*/}
      {bot.in_army ? (
        <button className="discharge-btn" onClick={() => onDischarge(bot)}>
          Discharge
        </button>
      ) : (
        <button className="add-btn" onClick={handleClick}>
          Add to Army
        </button>
      )}
    </div>
  );
}

export default Bot;
