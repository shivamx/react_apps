import React from "react";
import Login from "./Login";

var isLoggedIn = false;

var userIsRegistered = false;

//IF USER IS REGISTERED SHOW FORM TO LOGIN, 
//IF USER IS NOT REGISTERED, SHOW FORM TO REGISTER
function App() {
  return (
    <div className="container">  
     <Login registered={userIsRegistered}/>
    </div>
  );
}

export default App;

//USE OF TERNARY OPERATOR, TO PROVIDE EXPRESSION IN JSX