import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import SignUp from './pages/SignUp.tsx';
import LogIn from './pages/LogIn.tsx';
import Discover from './pages/Discover.tsx';
import Discover2 from './pages/Discover2.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "discover",
    element: <Discover />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "log-in",
    element: <LogIn />,
  },
  {
    path: "destination",
    element: <Discover2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
