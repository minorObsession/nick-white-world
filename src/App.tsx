import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "./pages/Landing";
// import About from "./pages/About";
import Shop from "./pages/Shop";
import ContactMe from "./pages/ContactMe";
import Homepage from "./pages/Homepage";

// todo (general)
// email service (serverless fn?)
// texting service
// talk to Nick - nfts? online shop?
//

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        // {
        //   path: "about",
        //   element: <About />,
        // },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "contact-me",
          element: <ContactMe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
