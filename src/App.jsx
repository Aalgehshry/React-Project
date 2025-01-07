import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Protfolio from "./components/Protfolio/Protfolio";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Footer/Footer";


let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "navbar", element: <Navbar /> },
      { path: "about", element: <About /> },
      { path: "footer", element: <Footer /> },
      { path: "contact", element: <Contact /> },
      { path: "protfolio", element: <Protfolio /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}></RouterProvider>
}
export default App;
