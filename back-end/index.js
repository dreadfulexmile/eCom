import express from "express";
import productRouter from "./api/product.api.js";
import categoryRouter from "./api/category.api.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use(express.json());

const PORT = 8000 ||

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
