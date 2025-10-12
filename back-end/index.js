import express from "express";
import { products, categories } from "./data.js";

const app = express();
app.use(express.json());

const PORT = 8000 ||

app.get("/api/products", (req, res) => {
    res.json(products);  
});

app.get("/api/categories", (req, res) => {
    res.json(categories);
});

app.get("/api/products/:id", (req,res) => {
    console.log(req.params);
    const product = products.find((p) => p._id === req.params.id);
    if(!product) {
        return res.status(404).json({message: "Product Not Found."})
    }
    res.json(product);
});

app.get("/api/categories/:id", (req,res) => {
    console.log(req.params);
    const category = categories.find((c) => c._id === req.params.id);
    if (!category){
        return res.status(404).json({message: "Category Not Found."})
    }
    res.json(category);
});

app.post("/api/products", (req,res) =>{
    const {name, price, description, categoryId} = req.body;
    const product = {
        _id: products.length +1,
        name,
        price,
        description,
        categoryId,
    };
    products.push(product);
    res.status(201).json({message: "Product is added."});
});

app.post("/api/categories", (req,res) =>{
    const {name, slug, __v} = req.body;
    const category = {
        _id: categories.length +1,
        name,
        slug,
        __v,
    };
    categories.push(category);
    res.status(201).send({message: "Category is added."})
});

app.delete("/api/products/:id", (req,res) =>{
    console.log(req.params);
    const product = products.find((p) => p._id === req.params.id);
    if(!product) {
        return res.status(404).json({message: "Product Not Found."})
    }
    res.json({message: "Product Deleted."}); 
});

app.delete("/api/categories/:id", (req,res) =>{
    console.log(req.params);
    const category = categories.find((c) => c._id === req.params.id);
    if(!category) {
        return res.status(404).json({message: "Category Not Found."})
    }
    res.json({message: "Category Deleted."}); 
});


//Connection
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
