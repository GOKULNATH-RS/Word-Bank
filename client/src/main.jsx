import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./components/Quiz.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
