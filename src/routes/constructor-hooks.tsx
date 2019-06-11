import React, { useState } from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly value: string };

const ConstructorRoute: React.FC<Props> = () => {
  const [{ value }, setValue] = useState<State>(() => ({
    value: localStorage.getItem("constructor-example_hooks") || ""
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("constructor-example_hooks", e.target.value);
    setValue({ value: e.target.value });
  };

  return (
    <div>
      <h1>{"Serialize value with LocalStorage."}</h1>
      <label>{"Value: "}</label>
      <input type={"text"} value={value} onChange={onChange} />
      <ViewSource url={"/src/routes/constructor-hooks.tsx"} />
    </div>
  );
};

export default ConstructorRoute;
