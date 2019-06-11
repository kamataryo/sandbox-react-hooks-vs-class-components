import React from "react";
import ViewSource from "../components/view-source";

const initialState = { value: 0 };

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1>{"Reuducer with redux"}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        {"increment"}
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        {"decrement"}
      </button>
      <p>{`Counter: ${state.value}`}</p>
      <ViewSource url={"/src/routes/reducer-with-hooks.tsx"} />
    </div>
  );
};

export default App;
