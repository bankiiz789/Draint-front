import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layout/Container";
import HomePage from "../page/HomePage";
import LandingPage from "../page/LandingPage";
import RedirectIfAuthenticate from "../features/auth/components/RedirectIfAuthenticate";
import ProfilePage from "../page/ProfilePage";
import WritePage from "../page/WritePage";
import ReadPage from "../page/ReadPage";
import StoryContextProvider from "../features/story/context/StoryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StoryContextProvider>
        <Container />
      </StoryContextProvider>
    ),

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
      { path: "/read/:storyId", element: <ReadPage /> },
      { path: "/write", element: <WritePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
