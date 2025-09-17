import express from "express";
import { products, categories } from "./data.js";

const app = express();
app.use(express.json());

const PORT = 8000 ||

//APIs
app.get("/api/products", (req, res) => {
    res.json(products);  
});


app.get("/api/categories", (req, res) => {
    res.json(categories);
});

//Connection
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});