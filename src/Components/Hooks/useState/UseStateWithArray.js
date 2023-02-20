import React, { useState } from "react";

function UseStateWithArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <h5>Hello I am UseState With Array Hook Components<span className="text-dark">(Click button generate new number and create li tag)</span></h5>
      <button className="btn btn-primary" onClick={addItem}>Generate 1 to 10 Number</button>
      <ul className="mt-2 list-group">
        {items.map((itemvalue, itemindex) => (
          <li className="list-group-item" key={itemindex}>
            {itemvalue.value}
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default UseStateWithArray;
