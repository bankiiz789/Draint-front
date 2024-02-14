import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layout/Container";
import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";
import RedirectIfAuthenticate from "../features/auth/components/RedirectIfAuthenticate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: (
          <RedirectIfAuthenticate>
            <LandingPage />
          </RedirectIfAuthenticate>
        ),
      },
      { path: "/homepage", element: <HomePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
