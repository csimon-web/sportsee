import React from "react";
import { createRoot } from 'react-dom/client';
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
import SmallScreens from './components/SmallScreens'
import LeftMenu from './components/LeftMenu'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <SmallScreens />
        <main>
          <LeftMenu />
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/profil",
    element: (<><Header /><SmallScreens /><main><LeftMenu /><User /></main></>),
  },
  {
    path: "/reglage",
    element: (<><Header /><SmallScreens /><main><LeftMenu /><Settings /></main></>),
  },
  {
    path: "/communaute",
    element: (<><Header /><SmallScreens /><main><LeftMenu /><Community /></main></>),
  },
  {
    path: "*",
    element: (<><Header /><SmallScreens /><main><LeftMenu /><NoMatch /></main></>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
