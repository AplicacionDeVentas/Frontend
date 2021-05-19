// latyout 
import LayoutHome from "../layout/LayoutHome.js";
import LayoutAdmin from "../layout/LayoutAdmin.js";

// pages
import Home from "../pages/Home";
import Login from "../pages/User/Login/Login"
import SignUp from "../pages/User/SignUp/SignUp"
import AdminHome from "../pages/Admin/AdminHome"
import UserSetting from "../pages/User/UserSetting/UserSetting.jsx"

//components
import Error404 from "../pages/Error/Error404.jsx";

const router = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        component: LayoutHome,
        exact: false,
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
                path: "/user-setting",
                component: UserSetting,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default router;