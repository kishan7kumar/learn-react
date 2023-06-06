import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

/* NOTE
 * This is way of dynamic import so all components of instamart
 * are loaded when it is rendered but not in starting of the application
 * Upon on Demand Loading -> upon render -> suspend loading
 * Import here is a promise and react uses Suspense to wait for promise to resolve
 * Also it takes fallback properties to show component while the bundle file is downloaded
 * Also do not import this lazy load component inside another component
 */

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <div className="app bg-gray-100 h-full w-full flex flex-col">
      <Header />
      <div className="grow min-h-0">
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // NOTE: here '/' means from the root
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile", // NOTE: here if we include / then it will be from root so not included
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={Shimmer}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
