import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly keys: string };

class App extends React.Component<Props, State> {
  state = { keys: "" };

  componentDidMount() {
    window.addEventListener<any>("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener<any>("keydown", this.onKeyDown);
  }

  onKeyDown = (e: React.KeyboardEvent) =>
    this.setState({ keys: this.state.keys + e.key });

  render() {
    const { keys } = this.state;
    return (
      <div>
        <h1>{"DidMount/WillUnmount Sample with Class Component"}</h1>
        <p>{"Try `keydown`."}</p>
        <p>{`keys: ${keys}`}</p>
        <ViewSource url={"/src/routes/component-did-mount-class.tsx"} />
      </div>
    );
  }
}

export default App;
