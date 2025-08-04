import express from 'express';
import {products, categories} from "./data.js";

const app = express();
app.use(express.json());

const PORT =8000;

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/categories", (req, res) => {
    res.json(categories);
});

app.get("/api/product/:id", (req,res) => {
    console.log(req.params);
    const product = products.find((p) => p._id === req.params.id);
    if(!product){
        return res.status(404).json({ message: "Product not found!"});
    }
    res.json(product);
});

app.listen(PORT, ()=>{
    console.log(`Servert Running at http://localhost:${PORT}`);

})