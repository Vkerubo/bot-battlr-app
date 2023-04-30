import React from "react";

function Bot({ bot, onAddToArmy, onDischarge }) {
  //function to add bot to army when clicked
  function handleClick() {
    onAddToArmy(bot);
  }

  return <div>Bot</div>;
}

export default Bot;
