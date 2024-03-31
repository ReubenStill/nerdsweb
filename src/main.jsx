import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from "./assets/Pages/LandingPage"
import AboutPage from "./assets/Pages/AboutPage"
import ErrorPage from "./assets/Pages/ErrorPage"
import './assets/utils/index.css'

//for router-system
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
