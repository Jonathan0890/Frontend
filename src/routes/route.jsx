import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Sales from "../pages/Sales";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import Formul from "../pages/Formul"
import Body from "../Body";
import Nosotros from "../pages/Nosotros";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sales",
        element: <Sales/>
    },
    {
        path:'/sidebar',
        element: <Sidebar/>
    },
    {
        path:'/footer',
        element: <Footer/>
    },
    {
        path:'/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/formul',
        element: <Formul/>
    },
    {
        path:'/body',
        element: <Body/>
    },
    {
        path:'/nosotros',
        element: <Nosotros/>
    }
]);