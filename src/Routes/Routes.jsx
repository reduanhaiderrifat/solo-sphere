import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../components/JobDetails";
import AddJob from "../pages/AddJob";
import MyPost from "../pages/MyPost";
import MyBids from "../pages/MyBids";
import BidsRequest from "../pages/BidsRequest";
import PrivetRoute from "../Privet/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addjob",
        element: <AddJob />,
      },
      {
        path: "/mypost",
        element: (
          <PrivetRoute>
            <MyPost />
          </PrivetRoute>
        ),
      },
      {
        path: "/mybid",
        element: <MyBids />,
      },
      {
        path: "/bidrequest",
        element: <BidsRequest />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);

export default router;
