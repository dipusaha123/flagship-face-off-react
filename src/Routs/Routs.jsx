import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
  },
]);