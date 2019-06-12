import React from "react";
import ViewSource from "../components/view-source";

const App: React.FC = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  return (
    <div>
      <h1>
        {"Multiple "}
        <code>{"useState"}</code>
      </h1>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
      <button onClick={() => setValue1(value1 + 1)}>{"increase value1"}</button>
      <button onClick={() => setValue2(value2 + 1)}>{"increase value2"}</button>
      <ViewSource url={"/src/routes/multiple-state-hooks.tsx"} />
    </div>
  );
};

export default App;
