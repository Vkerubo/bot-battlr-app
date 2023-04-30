import React, { useState, useEffect } from "react";

//render collection of bots
function BotCollection() {
  const [bots, setBots] = useState([]);

  //fetch list of bots from JSON file
  useEffect(() => {
    fetch("http://localhost:8000/bots")
    .then((Response) => Response.json())
    .then(({bots}) => setBots(bots))
    .catch((error) => console.error(error));
  }, []);

 

  return <div>Bot</div>;
}

export default BotCollection;
