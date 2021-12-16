import React, { useContext } from "react";
import { MyData } from "./parent";
//  import SecondChild from "./secondChild"

function FirstChild() {
  const MyName = useContext(MyData);

  return (
    <div>
    {/* <SecondChild /> */}
      <h1>1st {MyName}</h1>
    </div>
  );
}

export default FirstChild;
