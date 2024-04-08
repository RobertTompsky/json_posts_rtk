import { Main } from "@/pages/Main"
import { Post } from "@/pages/Post"
import { Outlet, RouteObject } from "react-router-dom"

enum AppRoutes {
    MAIN = 'main',
    POST = 'post'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POST]: '/post'
}

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        index: true,
        Component: Main
    },
    [AppRoutes.POST]: {
        path: `${RoutePath.post}/:id`,
        Component: Post
    }
}

export const PublicRoutes =
    Object.values(routeConfig)
        .map(({ Component, path, index }) => {
            if (Component === Main) {
                return {
                    Component,
                    index
                };
            } else {
                return {
                    Component,
                    path
                };
            }
        });

export const Public: React.FC = () => {
    return <Outlet />
};