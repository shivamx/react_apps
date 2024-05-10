import React from "react";
import * as calc from "../calculator";

function Calculator() {
  return (
    <ul>
      <li>{calc.add(1, 2)}</li>
      <li>{calc.multiply(1, 2)}</li>
      <li>{calc.subtract(1, 2)}</li>
      <li>{calc.divide(1, 2)}</li>
    </ul>
  );
}

export default Calculator;
