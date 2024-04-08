import App from "@/app/App";
import { NotFound } from "@/pages/NotFound";
import { Public, PublicRoutes } from "@/shared/lib/config/routeConfig";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <NotFound />,
        children: [
            {
                Component: Public,
                children: PublicRoutes
            }
        ]
    }
])