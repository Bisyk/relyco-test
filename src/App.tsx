import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { queryClient } from "./utils/http";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },

    {},
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
