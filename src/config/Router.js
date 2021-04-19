// pages
import Home from "../pages/Home";

//components
import Error404 from "../components/Error404";

const router = [
    {
        paht: "/",
        component: Home,
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