// latyout 
import LayoutHome from "../layout/LayoutHome.js";
import LayoutAdmin from "../layout/LayoutAdmin.js";
import LayoutUser from "../layout/LayoutUser.js";

// pages
import Home from "../pages/Home";
import Login from "../pages/User/Login/Login"
import SignUp from "../pages/User/SignUp/SignUp"
import AdminHome from "../pages/Admin/AdminHome"
import GeneralUser from "../pages/User/GeneralUser/GeneralUser"
import PedidosUser from "../pages/User/PedidosUser/PedidosUser.jsx"

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
        path: "/user",
        component: LayoutUser,
        exact: false,
        routes: [
            {
                path: "/user",
                component: GeneralUser,
                exact: true
            },
            {
                path: "/user/pedidos",
                component: PedidosUser,
                exact: true
            },
            {
                path: "/user/direccion",
                component: Error404,
                exact: true
            },
            {
                path: "/user/setting",
                component: Error404,
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
                component: Error404
            }
        ]
    }
]

export default router;