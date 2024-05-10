import React from "react";
import Heading from "./Heading";
import Calculator from "./Calculator";

const date = new Date();
const year = date.getFullYear();
const image = "https://i.imgur.com/yXOvdOSs.jpg";

function App() {
  return (
    <div className="bold">
      <Heading></Heading>
      <p>
        Welcome to Year {year}, your lucky no is {2 * Math.random()}
      </p>
      <img src={image} alt="Random"></img>
      <Calculator />
    </div>
  );
}

export default App;
