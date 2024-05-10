import React from "react";

//Cutome INLINE CSS
const customStyle = {
  color: "red",
  fontSize: "50px",
  border: "1px solid black",
};

const date = new Date();
const time = date.getHours();

if (time < 12) {
  console.log("Good Morning");
  customStyle.color = "green";
} else if (time < 18) {
  console.log("Good Afternoon");
  customStyle.color = "yellow";
} else {
  console.log("Good Night");
  customStyle.color = "blue";
}

function Heading() {
  return <h1 style={customStyle}>Hello World</h1>;
}

export default Heading;
