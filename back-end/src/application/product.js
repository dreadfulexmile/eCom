import { products } from '../data.js';
import product from '../infrastructure/db/models/product.model.js';

const getAllProducts = (req,res) =>{
    const products = await Product.find();
    res.json(products);
};

const createProduct = (req, res) =>{
    const newProduct = req.body;
    await product.create(newProduct);
    res.status(201).json(newProduct);
};

const getProductById = (req, res) =>{
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

const updateProductById = (req, res) =>{
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json(products[productIndex]);
};

const deleteProductById = (req, res) =>{
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const deletedProduct = products[index];
    products.splice(index, 1);
    res.status(200).send();
};

export {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
};