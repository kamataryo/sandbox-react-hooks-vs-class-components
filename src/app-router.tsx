import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConstructorClassRoute from "./routes/constructor-class";
import ConstructorHooksRoute from "./routes/constructor-hooks";
import ComponentDidMountClassRoute from "./routes/component-did-mount-class";
import ComponentDidMountHooksRoute from "./routes/component-did-mount-hooks";

const routes: { [path: string]: any } = {
  "constructor/class": { Component: ConstructorClassRoute },
  "constructor/hooks": { Component: ConstructorHooksRoute },
  "componentDidMount/class": { Component: ComponentDidMountClassRoute },
  "componentDidMount/hooks": { Component: ComponentDidMountHooksRoute }
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
