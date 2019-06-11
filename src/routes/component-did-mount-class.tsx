import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly keys: string };

export class ComponentDidMountRoute extends React.Component<Props, State> {
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
        <h1>{"ComponentDidMount and componentWillUnmount Sample"}</h1>
        <p>{"Try `keydown`."}</p>
        <dl>
          <dt>{"keys:"}</dt>
          <dd>{keys}</dd>
        </dl>
        <ViewSource url={"/src/routes/component-did-mount-class.tsx"} />
      </div>
    );
  }
}

export default ComponentDidMountRoute;
