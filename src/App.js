import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product"
import Announcement from "./components/Announcement/Announcement";
import Newsletter from "./components/NewsLetter/Newsletter";
 import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

const Layout = () => {
  return (
    <div className="app">
      <Announcement/>
      <Navbar/>
      <Outlet />
      <Newsletter/>
      <Footer/>
    </div>
  )
  }
const AuthLayout = () => {
  return (
    <div className="app">
      <Announcement/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
           path:"/",
           element:<Home/>
        },
        {
          path:"/productList/:id",
          element:<ProductList/>
        },
        {
          path:"/product/:id",
          element:<Product/>
        },                               
                                                             
      ]
    },
    {
      element: <AuthLayout />,
      children: [
        {
           path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
      ],
    },

  
  ])
  

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
  
      </RouterProvider>
    </div>
  );
}

export default App;
