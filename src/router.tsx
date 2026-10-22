import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: ProductPage },
            { path: "cart", Component: CartPage },
            { path: "checkout", Component: CheckoutPage },
        ]
    },
], {
    // Vite sirve la app bajo `base` (/ecommerce-product-page/), también en local
    basename: import.meta.env.BASE_URL
})
