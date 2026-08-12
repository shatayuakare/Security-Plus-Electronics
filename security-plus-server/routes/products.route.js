import express from "express";

const productRoute = express.Router();

const lengthProduct = 21;

productRoute.get("/", async (req, res) => {
    try {
        const response = await fetch(`https://woston.in/wp-json/wc/store/v1/products?per_page=${lengthProduct}&page=1`);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch products" });
        }
        const data = await response.json();
        console.log(data.length)
        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" });
    }
});
productRoute.get("/:page", async (req, res) => {
    try {
        console.log(req.params.page)
        const response = await fetch(`https://woston.in/wp-json/wc/store/v1/products?per_page=${lengthProduct}&page=${req.params.page}`);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch products" });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" });
    }
});

productRoute.get("/:id", async (req, res) => {
    try {
        const response = await fetch(`https://woston.in/wp-json/wc/store/v1/products/${req.params.id}`);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch products" });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" });
    }
});

export default productRoute