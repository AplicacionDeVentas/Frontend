// latyout 
import LayoutHome from "../layout/LayoutHome";

// pages
import Home from "../pages/Home";
import Login from "../components/Web/User/Login/Login"
import SignUp from "../components/Web/User/SignUp/SignUp"

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
                path: "/signup",
                component: SignUp,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default router;