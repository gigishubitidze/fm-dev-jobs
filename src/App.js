import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job/index";
import NotFound from "./pages/NotFound";

const basename = process.env.PUBLIC_URL;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="jobs" replace /> },
        { path: "jobs", element: <Jobs /> },
        { path: "jobs/:jobId", element: <Job /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename,
  }
);

function App() {
  return <RouterProvider router={router} future={{}} />;
}

export default App;
