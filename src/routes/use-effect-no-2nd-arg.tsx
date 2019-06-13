import React from "react";
import ViewSource from "../components/view-source";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  });

  console.log("render");

  return (
    <div>
      <p>{"See console"}</p>
      <button onClick={() => setCount(count + 1)}>{`render: ${count}`}</button>
      <ViewSource url={"/src/routes/use-effect-no-2nd-arg.tsx"} />
    </div>
  );
};

export default App;
