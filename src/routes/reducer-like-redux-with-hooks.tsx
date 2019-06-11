import React from "react";
import ViewSource from "../components/view-source";

type AppState = { readonly value: number };

const initialState = { value: 0 };

const reducer = (state = initialState, action: { type: string }): AppState => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

// Container
const CounterContext = React.createContext<AppState>(null as any);
const DispatchContext = React.createContext<React.Dispatch<any>>(null as any);

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
  const state = React.useContext(CounterContext);
  const dispatch = React.useContext(DispatchContext);

  return (
    <div>
      <h1>{"Reuducer like redux with Hooks"}</h1>
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
