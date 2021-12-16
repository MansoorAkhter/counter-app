import { MyData } from "./parent";

function SecondChild() {
  return (
    <div>
      <MyData.Consumer>
        {(data) => {
          return <h1>2nd {data}</h1>;
        }}
      </MyData.Consumer>
    </div>
  );
}

export default SecondChild;
