import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import DetailOfBlog from "../Pages/Blog/DetailOfBlog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/detailOfBlog/:id',
            element:<DetailOfBlog></DetailOfBlog>
        }
      ]
    },
  ])

  export default router;