import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
         {
            path: '/favorites',
            Component: Favorites,
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
             path: '/phone-details',
            element: <PhoneDetails></PhoneDetails>

        }
    ]
  },
]);