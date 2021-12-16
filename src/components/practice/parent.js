import React, { createContext } from "react";
import FirstChild from "./firstChild";
import SecondChild from "./secondChild"

const MyData = React.createContext();

const Parent = () => {
  return (
    <div>
      <MyData.Provider value={"Saylani Mass IT"}>
        <FirstChild />
        <SecondChild />
      </MyData.Provider>
    </div>
  );
};

export default Parent;
export { MyData };
