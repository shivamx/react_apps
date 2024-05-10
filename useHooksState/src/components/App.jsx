import { useState } from "react";
import React from "react";




function App() {
  const [count, setCount] = useState(0); //Initial state array {count:0, function setState}  //this canbe done only inside functional component


  function increase() {
    console.log("increased");
    setCount(count + 1);
  }

  function decrease() {
    console.log("decreased");
    setCount(count - 1);
  }


  return (
  <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  </div>);
}

export default App;
