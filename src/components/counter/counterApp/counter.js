import React, { useState } from "react";
import Button from "./button";

function Counter() {
  const [counter2, setcounter] = useState(0);

  const incrementhanlder = () => {
    setcounter(counter2 + 1);
    console.log("incrementhanlder" + counter2);
  };

  const decrementhanlder = () => {
    setcounter(counter2 - 1);
    console.log("decrementhanlder" + counter2);
  };

  return (
    <div>
      <Button myClick={incrementhanlder} title="+" />

      <span
        style={{
          padding: "5px",
          fontSize: "50px",
          width: "50px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {counter2}
      </span>

      <Button myClick={decrementhanlder} title="-" />
    </div>
  );
}
// onClick={() => decrementhanlder(2)}
export default Counter;
