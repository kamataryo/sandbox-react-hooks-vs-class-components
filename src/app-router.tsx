import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConstructorClass from "./routes/constructor-class";
import ConstructorHooks from "./routes/constructor-hooks";
import ComponentDidMountClass from "./routes/component-did-mount-class";
import ComponentDidMountHooks from "./routes/component-did-mount-hooks";
import ComponentDidUpdateClass from "./routes/component-did-update-class";
import ComponentDidUpdateHooks from "./routes/component-did-update-hooks";
import ReducerWithRedux from "./routes/reducer-with-redux";
import ReducerWithHooks from "./routes/reducer-with-hooks";
import ReducerLikeReduxWithHooks from "./routes/reducer-like-redux-with-hooks";
import MultipleStateHooks from "./routes/multiple-state-hooks";

const routes: { [path: string]: any } = {
  "constructor/class": { Component: ConstructorClass },
  "constructor/hooks": { Component: ConstructorHooks },
  "componentDidMount/class": { Component: ComponentDidMountClass },
  "componentDidMount/hooks": { Component: ComponentDidMountHooks },
  "componentDidUpdate/class": { Component: ComponentDidUpdateClass },
  "componentDidUpdate/hooks": { Component: ComponentDidUpdateHooks },
  "reducer/redux": { Component: ReducerWithRedux },
  "reducer/hooks": { Component: ReducerWithHooks },
  "reducer-like-redux/hooks": { Component: ReducerLikeReduxWithHooks },
  "multiple-state/hooks": { Component: MultipleStateHooks }
};

const Navigation: React.FC = () => (
  <ul>
    {Object.keys(routes).map(path => (
      <li key={path}>
        <Link to={`/${path}/`}>{path}</Link>
      </li>
    ))}
    <li>
      <p>
        <i className="sandbox-legend-component" />
        {"Working component area"}
      </p>
    </li>
  </ul>
);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <>
        <Navigation />
        {Object.keys(routes).map(path => {
          const { Component } = routes[path];
          return (
            <Route
              key={path}
              path={`/${path}/`}
              exact
              render={props => (
                <main className="sandbox">
                  <Component {...props} />
                </main>
              )}
            />
          );
        })}
      </>
    </Router>
  );
};

export default AppRouter;
