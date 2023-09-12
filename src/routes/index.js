import { Route, Routes } from "react-router-dom";

import Overview from "../Pages/Overview";
import Preferences from "../Pages/Preferences";

const routes = [
  { path: "/", Component: Overview },
  { path: "/preferences/:id", Component: Preferences },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const { Component } = route;
        return <Route path={route.path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default Router;
