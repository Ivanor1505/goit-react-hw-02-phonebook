import React from "react";

export const Contact = ({ name, number, id, onDelete }) => {
    return (
        <li>
          {name}: {number}
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    )           
    };