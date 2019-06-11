import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};

const App: React.FC<Props> = () => {
  const [keys, setKeys] = React.useState<string>("");

  React.useEffect(
    () => {
      const onKeyDown = (e: React.KeyboardEvent) => setKeys(keys + e.key);
      window.addEventListener<any>("keydown", onKeyDown);
      return () => window.removeEventListener<any>("keydown", onKeyDown);
    },
    [keys]
  );

  return (
    <div>
      <h1>{"DidMount/WillUnmount Sample with Hooks"}</h1>
      <p>{"Try `keydown`."}</p>
      <p>{`keys: ${keys}`}</p>
      <ViewSource url={"/src/routes/component-did-mount-hooks.tsx"} />
    </div>
  );
};

export default App;
