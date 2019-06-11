import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly value: string };

export class ConstructorRoute extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem("key-cl") || ""
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("key-cl", e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>{"Constructor Sample"}</h1>
        <p>{"Serialize value with localStorage."}</p>
        <label>{"Value: "}</label>
        <input type={"text"} value={value} onChange={this.onChange} />
        <ViewSource url={"/src/routes/constructor-class.tsx"} />
      </div>
    );
  }
}

export default ConstructorRoute;
