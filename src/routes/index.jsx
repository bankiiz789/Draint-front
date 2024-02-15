import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layout/Container";
import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";
import RedirectIfAuthenticate from "../features/auth/components/RedirectIfAuthenticate";
import ProfilePage from "../page/ProfilePage";
import WritePage from "../page/WritePage";

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
      { path: "/profile", element: <ProfilePage /> },
      { path: "/read", element: <ReadPage /> },
      { path: "/write", element: <WritePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
