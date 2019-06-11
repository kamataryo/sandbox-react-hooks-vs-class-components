import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConstructorRoute from "./routes/constructor";

const routes: { [path: string]: any } = {
  constructor: {
    Component: ConstructorRoute
  }
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
