import React from "react";
import { Button } from "./Contact.styled";


export const Contact = ({ name, number, id, onDelete }) => {
    return (
        <li>
          {name}: {number} 
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </li>
    )           
    };