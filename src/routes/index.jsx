import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layout/Container";
import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "/homepage", element: <HomePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
