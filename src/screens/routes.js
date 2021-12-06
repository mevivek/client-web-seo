import Catalogue from "./catalogue/Catalogue";
import ProductDetails from "./details/ProductDetails";
import Home from "./home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/catalogue',
        exact: true,
        component: Catalogue,
    },
    {
        path: '/catalogue/:slug',
        exact: true,
        component: ProductDetails,
    },
];