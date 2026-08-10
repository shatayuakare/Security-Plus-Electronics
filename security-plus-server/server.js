import express from "express";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const app = express();

const WooCommerce = new WooCommerceRestApi({
    url: "http://localhost:3000",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});

app.get("/api/products", async (req, res) => {
    try {
        const response = await WooCommerce.get("products", {
            per_page: 20,
            page: 1
        });

        res.json(response.data);

    } catch (error) {
        console.error(error.response?.data || error.message);

        res.status(500).json({
            message: "Unable to fetch WooCommerce products"
        });
    }
});


app.listen(5000)