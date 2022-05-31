import React, { useState } from "react";

function App() {
  const state = useState(123);
  console.log(state);

  function increase() {
    // count++;
  }

  return (
    <div className="container">
      <h1>0</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
