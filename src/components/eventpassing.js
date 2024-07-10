 import React from "react";
 const Cricket=() => {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Its a catch")}>He made it!</button>
    );
  }
  export default Cricket
  
  
  