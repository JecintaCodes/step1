import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/common/Layout";
import HomeScreen from "../pages/HomeScreen"
import InputScreen from "../pages/InputScreen";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index:true,
        path:"/home",
        element: <HomeScreen/>,
      },
      {
        path:"/input",
        element: <InputScreen/>,
      }
    ]
  }
])