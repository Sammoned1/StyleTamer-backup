import ProfilePage from "./ShopPages/ProfilePage";
import {
    ADMIN_ROUTE, BAGS_ROUTE,
    BASKET_ROUTE, BOOTS_ROUTE, BRANDS_ROUTE,
    CATALOGUE_ROUTE, CLOTHES_ROUTE,
    DEVICE_ROUTE, JEWELLERY_ROUTE,
    LOGIN_ROUTE, MAN_COLLECTION_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE, WOMAN_COLLECTION_ROUTE
} from "./utils/consts";
import BasketPage from "./ShopPages/BasketPage";
import Shop from "./ShopPages/Shop";
import Auth from "./ShopPages/Auth";
import DevicePage from "./ShopPages/DevicePage";
import Catalogue from "./ShopPages/Catalogue";
import WomanCollection from "./ShopPages/WomanCollection";
import ManCollection from "./ShopPages/ManCollection";
import Jewellery from "./ShopPages/Jewellery";
import Clothes from "./ShopPages/Clothes";
import Boots from "./ShopPages/Boots";
import Brands from "./ShopPages/Brands";
import Bags from "./ShopPages/Bags";
import AdminPage from "./ShopPages/AdminPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
    {
        path: BASKET_ROUTE,
        Component: <BasketPage/>
    },
    {
        path: PROFILE_ROUTE,
        Component: <ProfilePage/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: <Auth/>
    // },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: <Auth/>
    // },
    {
        path: DEVICE_ROUTE + '/' + ':id',
        Component: <DevicePage/>
    },
    {
        path: CATALOGUE_ROUTE,
        Component: <Catalogue/>
    },
    {
        path: WOMAN_COLLECTION_ROUTE,
        Component: <WomanCollection/>
    },
    {
        path: MAN_COLLECTION_ROUTE,
        Component: <ManCollection/>
    },
    {
        path: JEWELLERY_ROUTE,
        Component: <Jewellery/>
    },
    {
        path: CLOTHES_ROUTE,
        Component: <Clothes/>
    },
    {
        path: BOOTS_ROUTE,
        Component: <Boots/>
    },
    {
        path: BRANDS_ROUTE,
        Component: <Brands/>
    },
    {
        path: BAGS_ROUTE,
        Component: <Bags/>
    },
]