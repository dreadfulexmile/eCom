import express from "express";
import {getAllCategories,
    createCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById} from "../application/category.js";

const categoryRouter = express.Router();

categoryRouter
    .route('/')
    .get(getAllCategories)
    .post(createCategory);

categoryRouter
    .route('/:id')
    .get(getCategoryById)
    .put(updateCategoryById)
    .delete(deleteCategoryById);

export default categoryRouter;