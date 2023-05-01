import React from "react";

function SortBar({ onSortByHealth, onSortByDamage, onSortByArmor }) {
  return (
    <div>
      <h3>Sort By:</h3>
      <button onClick={onSortByHealth}>Health</button>
      <button onClick={onSortByDamage}>Damage</button>
      <button onClick={onSortByArmor}>Armor</button>
    </div>
  );
}

export default SortBar;
