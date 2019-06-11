import React from "react";
import { createStore, Action, Dispatch } from "redux";
import { Provider, connect } from "react-redux";
import ViewSource from "../components/view-source";

type StateProps = { readonly value: number };
type DispatchProps = {
  readonly increment: () => void;
  readonly decrement: () => void;
};

type MergedProps = StateProps & DispatchProps;

const initialState = { value: 0 };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App: React.FC<MergedProps> = props => {
  return (
    <div>
      <h1>{"Reuducer with redux"}</h1>
      <button onClick={props.increment}>{"increment"}</button>
      <button onClick={props.decrement}>{"decrement"}</button>
      <p>{`Counter: ${props.value}`}</p>
      <ViewSource url={"/src/routes/reducer-with-redux.tsx"} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({ value: state.value });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

const ConnectedApp = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
