import React, { useState } from "react";

function Bot({ bot, inArmy, onRemoveFromArmy, onAddToArmy, onDischarge }) {
  const [showModal, setShowModal] = useState(false);

  const buttonText = inArmy ? "Discharge" : "Add to army";
  const buttonAction = inArmy ? onDischarge : onAddToArmy;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleClick() {
    onAddToArmy(bot);
  }

  function handleRemoveClick() {
    onRemoveFromArmy(bot);
  }

  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>

      <p>
        <strong>catchphrase:</strong>
        {bot.catchphrase}
      </p>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => buttonAction(bot)}>{buttonText}</button>
      <button className="details-btn" onClick={toggleModal}>
        View Details
      </button>
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
            {inArmy && (
              <button className="remove-btn" onClick={handleRemoveClick}>
                X
              </button>
            )}
            {inArmy && <button onClick={onDischarge}>Discharge</button>}
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bot;
