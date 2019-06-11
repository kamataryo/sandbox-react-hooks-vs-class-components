import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConstructorClassRoute from "./routes/constructor-class";
import ConstructorHooksRoute from "./routes/constructor-hooks";

const routes: { [path: string]: any } = {
  "constructor/class": { Component: ConstructorClassRoute },
  "constructor/hooks": { Component: ConstructorHooksRoute }
};

const Navigation: React.FC = () => (
  <ul>
    {Object.keys(routes).map(path => (
      <li key={path}>
        <Link to={`/${path}/`}>{path}</Link>
      </li>
    ))}
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
              render={props => <Component {...props} />}
            />
          );
        })}
      </>
    </Router>
  );
};

export default AppRouter;
