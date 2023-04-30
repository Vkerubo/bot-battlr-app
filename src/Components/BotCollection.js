import React, { useState, useEffect } from "react";
import Bot from "./Bot";

function BotCollection({ bots, onAddToArmy }) {
  //create array of bot components from bots array
  const botList = bots.map((bot) => (
    <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
  ));

  //render BetCollection component
  return (
    <div className="bot-collection">
      <h2>All boats</h2>
      {/*render botList or message if no bots are available */}
      {botList.length > 0 ? botList : <p>No bots available</p>}
    </div>
  );
}

export default BotCollection;
