import React, { useState } from "react";

function Bot({ bot, onAddToArmy, onDischarge }) {
  //initialize state for modal visibility
  const [showModal, setShowModal] = useState(false);

  //toggle modal visibility
  function toggleModal() {
    setShowModal(!showModal);
  }
  //function to add bot to army when clicked
  function handleClick() {
    onAddToArmy(bot);
  }

  // Remove bot from army when button is clicked
  function handleRemoveClick() {
    onDischarge(bot);
  }

  //render Bot component
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>

      <p>
        <strong>catchphrase:</strong>
        {bot.catchphrase}
      </p>
      <img src={bot.avatar_url} alt={bot.name} />
      {/*render add to army or discharge button*/}
      {bot.in_army ? (
        <button className="remove-btn" onClick={handleRemoveClick}>
          Remove from Army
        </button>
      ) : (
        <button className="add-btn" onClick={handleClick}>
          Add to Army
        </button>
      )}
      {/* Render button to toggle modal */}
      <button className="details-btn" onClick={toggleModal}>
        View Details
      </button>
      {/* Render modal when showModal is true */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              <strong>Class:</strong> {bot.bot_class}
            </p>
            <p>
              <strong>Health:</strong> {bot.health}
            </p>
            <p>
              <strong>Damage:</strong> {bot.damage}
            </p>
            <p>
              <strong>Armor:</strong> {bot.armor}
            </p>
            <p>{bot.description}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bot;
