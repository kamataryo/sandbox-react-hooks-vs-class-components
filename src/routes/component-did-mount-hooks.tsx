import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly keys: string };

export const ComponentDidMountRoute: React.FC<Props> = () => {
  const [state, setState] = React.useState<State>(() => ({
    keys: ""
  }));

  const { keys } = state;

  React.useEffect(
    () => {
      const onKeyDown = (e: React.KeyboardEvent) =>
        setState({ keys: keys + e.key });
      window.addEventListener<any>("keydown", onKeyDown);
      return () => window.removeEventListener<any>("keydown", onKeyDown);
    },
    [keys]
  );

  return (
    <div>
      <h1>{"ComponentDidMount and componentWillUnmount Sample"}</h1>
      <p>{"Try `keydown`."}</p>
      <dl>
        <dt>{"keys:"}</dt>
        <dd>{keys}</dd>
      </dl>
      <ViewSource url={"/src/routes/component-did-mount-hooks.tsx"} />
    </div>
  );
};

export default ComponentDidMountRoute;
