import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router-dom";

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
}

const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
}

export const routerConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRouter.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
}