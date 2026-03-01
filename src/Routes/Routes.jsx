import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/ErrorPage/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/ErrorPage/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            // path:"/",
            Component:Home,
        }
    ]
  },
]);