import React, { useState, useEffect } from "react";
import Bot from "./Bot";

function BotCollection({ bots, onAddToArmy }) {
  const botList = bots.map((bot) => (
    <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
  ));

  return <div>BotCollection</div>;
}

export default BotCollection;
