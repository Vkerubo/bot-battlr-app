import React, { useState, useEffect } from "react";
import Bot from "./Bot";

//render collection of bots
function BotCollection(onAddToArmy) {
  const [bots, setBots] = useState([]);

  //fetch list of bots from JSON file
  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((Response) => Response.json())
      .then(({ bots }) => setBots(bots))
      .catch((error) => console.error(error));
  }, []);

  //map list of bots to Bot components
  const botList = bots.map((bot) => (
    <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
  ));

  return <div>Bot</div>;
}

export default BotCollection;
