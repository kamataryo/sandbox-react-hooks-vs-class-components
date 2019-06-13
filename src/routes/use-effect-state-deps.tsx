import React from "react";
import ViewSource from "../components/view-source";

const App: React.FC = () => {
  const [text, setText] = React.useState("");

  React.useEffect(
    () => {
      const timerId = setTimeout(() => {
        setText(value => value.toUpperCase());
        console.log("effect");
      }, 2000);
      return () => {
        clearTimeout(timerId);
        console.log("cleanup");
      };
    },
    [text]
  );

  console.log("render");

  return (
    <div>
      <p>{"See console"}</p>
      <input
        type={"text"}
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
      <ViewSource url={"/src/routes/use-effect-state-deps.tsx"} />
    </div>
  );
};

export default App;
