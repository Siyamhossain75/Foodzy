import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Error from "../Components/Errorpage/Error.jsx";
import Faq from "../Components/FAQ/Faq.jsx";
import Login from "../Components/Auth/Login.jsx";
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
        }


    ]

} ,
])  
export default router