import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";

const router = createBrowserRouter(
  routes,
  {
    basename: "/tekuno-site",
  }
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
