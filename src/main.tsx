import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AuthProvider from './context/authContext'
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import SignUpPage from './pages/SignUp.tsx';
import LogIn from './pages/LogIn.tsx';
import Discover from './pages/Discover.tsx';
import Discover2 from './pages/Discover2.tsx';
import { NewItinerary } from './pages/NewItinerary.tsx';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/destination",
    element: <Discover2 />,
  },
  {
    path: "/new-itinerary",
    element:
      <ProtectedRoute>
        <NewItinerary />
      </ProtectedRoute>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
)
