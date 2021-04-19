// latyout 
import LayoutHome from "../layout/LayoutHome";

// pages
import Home from "../pages/Home";

//components
import Error404 from "../components/Error404";

const router = [
    {
        paht: "/",
        component: LayoutHome,
        exact: false,
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