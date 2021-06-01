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
import OrderUser from "../pages/User/OrderUser/OrderUser.jsx"
import DirectionUser from "../pages/User/DirectionUser/DirectionUser.jsx"
import ConfigUser from "../pages/User/ConfigUser/ConfigUser.jsx"
import ShoppingCartPage from "../pages/ShoppingCart/ShoppingCartPage"
import SuccessBuy from "../pages/SuccessBuy"

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
                component: OrderUser,
                exact: true
            },
            {
                path: "/user/direccion",
                component: DirectionUser,
                exact: true
            },
            {
                path: "/user/setting",
                component: ConfigUser,
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
                path: "/checkout",
                component: ShoppingCartPage,
                exact: true
            },
            {
                path: "/success-buy",
                component: SuccessBuy,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default router;