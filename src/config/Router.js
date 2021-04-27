// latyout 
import LayoutHome from "../layout/LayoutHome";

// pages
import Home from "../pages/Home";
import Login from "../components/Web/User/Login/Login"

//components
import Error404 from "../components/Error/Error404";

const router = [
    {
        paht: "/",
        component: LayoutHome,
        exact: true,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/login",
                component: Login,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default router;