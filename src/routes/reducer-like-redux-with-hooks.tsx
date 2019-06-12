import React from "react";
import ViewSource from "../components/view-source";

type AppState = { readonly value: number };
type Action = { type: string };
type Dispatch = React.Dispatch<Action>;

const initialState = { value: 0 };

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

// Context Provider
const CounterContext = React.createContext<AppState>(initialState);
const DispatchContext = React.createContext<Dispatch>(() => ({}));

const Provider: React.FC = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </CounterContext.Provider>
  );
};

const App: React.FC = () => {
  // Consumers
  const state = React.useContext(CounterContext);
  const dispatch = React.useContext(DispatchContext);

  return (
    <div>
      <h1>{"Redux like Reuducer with Context and Hooks"}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        {"increment"}
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        {"decrement"}
      </button>
      <p>{`Counter: ${state.value}`}</p>
      <ViewSource url={"/src/routes/reducer-like-redux-with-hooks.tsx"} />
    </div>
  );
};

export default () => (
  <Provider>
    <App />
  </Provider>
);
