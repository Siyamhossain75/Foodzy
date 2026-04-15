import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Error from "../Components/Errorpage/Error.jsx";
import Login from "../Components/Auth/Login.jsx";
import Products from "../Components/Products/Products.jsx";
import Blog from "../Components/Blog/Blog.jsx";
import Cart from "../Components/cart/Cart.jsx";
import Checkout from "../Components/Checkoutpage/Checkout.jsx";
import SignupPage from "../Components/Auth/SignupPage.jsx";
import PrivateRoute from "../Components/Auth/PrivateRoute.jsx";

const router =createBrowserRouter([
{
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        {
            path:"/checkoutpage",
            element:<Checkout></Checkout>
        },
        {
            path:"/products",
            element:<Products></Products>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
           path:"/signup",
           element:<SignupPage></SignupPage>
        },
        {
  path: "/checkout",
  element: <PrivateRoute><Checkout /></PrivateRoute>
}


    ]

} 
])  
export default router ;