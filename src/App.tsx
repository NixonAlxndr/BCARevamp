import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home"
import Login from "./Pages/Login";

let router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home
      },{
        path: "login/:type",
        Component: Login
      }
    ]
  },
]);


const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App