import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Error from "../Components/Errorpage/Error.jsx";
import Faq from "../Components/FAQ/Faq.jsx";
import Login from "../Components/Auth/Login.jsx";
import Products from "../Components/Products/Products.jsx";
import Blog from "../Components/Blog/Blog.jsx";

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
            path:"/faq",
            element:<Faq></Faq>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/products",
            element:<Products></Products>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        }


    ]

} 
])  
export default router ;