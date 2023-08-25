import React from "react";

export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={onChange} />
    </div>
  );
};
