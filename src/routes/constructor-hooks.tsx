import React, { useState } from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly value: string };

export const ConstructorRoute: React.FC<Props> = () => {
  const [state, setState] = useState<State>(() => ({
    value: localStorage.getItem("key-hk") || ""
  }));

  const { value } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("key-hk", e.target.value);
    setState({ value: e.target.value });
  };

  return (
    <div>
      <h1>{"Constructor Sample"}</h1>
      <p>{"Serialize value with localStorage."}</p>
      <label>{"Value: "}</label>
      <input type={"text"} value={value} onChange={onChange} />
      <ViewSource url={"/src/routes/constructor-hooks.tsx"} />
    </div>
  );
};

export default ConstructorRoute;
