// latyout 
import LayoutHome from "../layout/LayoutHome";

// pages
import Home from "../pages/Home";

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
                component: Error404
            }
        ]
    }
]

export default router;