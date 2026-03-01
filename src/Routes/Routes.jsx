import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/ErrorPage/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/ErrorPage/Home/Home';
import Notices from '../Pages/ErrorPage/Notices/Notices'
import Contact from '../Pages/ErrorPage/Contact/Contact'
import Gallery from '../Pages/ErrorPage/Gallery/Gallery';
import About from '../Pages/ErrorPage/About/About';
import Routin from '../Pages/ErrorPage/Routin/Routin';
import Results from '../Pages/ErrorPage/Results/Results';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
          path:"Notices",
        element: <Notices />,

        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        {
          path:"gallery",
          element:<Gallery></Gallery>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"routine",
          element:<Routin></Routin>
        },
        {
          path:"result",
          element:<Results></Results>

        }
    ]
  },
]);