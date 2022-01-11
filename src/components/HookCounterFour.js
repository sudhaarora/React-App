import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState();
  const addItem = () => {
    setItems([
      ...items,
      {
        id: input.length,
        // value: Math.floor(Math.random() * 10) + 1
        value: { input }
      }
    ]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add a Number</button>
        {/* <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
          <li>{items}</li> 
        </ul> */}
      </form>
    </div>
  );
}

export default HookCounterFour;
// Vedio 5: https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=5
