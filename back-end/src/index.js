import dotenv from "dotenv";
dotenv.config();
import express from "express";
import productRouter from "./api/product.api.js";
import categoryRouter from "./api/category.api.js";
import bodyParser from "body-parser";
import connectToDatabase from "./infrastructure/db/database.js";

const app = express();

app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use(express.json());

connectToDatabase();

const PORT = 8000 ||

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
