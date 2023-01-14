import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import User from './pages/User'
import Settings from './pages/Settings'
import Community from './pages/Community'
import NoMatch from './pages/NoMatch'
import Header from './components/Header'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <>
    <Header />
    <Home />
    </>),
  },
  {
    path: "/profil",
    element: (<><Header /><User /></>),
  },
  {
    path: "/reglage",
    element: (<><Header /><Settings /></>),
  },
  {
    path: "/communaute",
    element: (<><Header /><Community /></>),
  },
  {
    path: "*",
    element: (<><Header /><NoMatch /></>),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);