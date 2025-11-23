import { categories } from "../data.js";

const getAllCategories = (req,res) =>{
    res.json(Categories);
};

const createCategory = (req, res) =>{
    const newID = (Categories.length + 1).toString();
    const newCategory = { id: newID, ...req.body, __v: 0 };
    Categories.push(newCategory);
    res.status(201).json(newCategory);
};

const getCategoryById = (req, res) =>{
    const { id } = req.params;
    const category = Categories.find(c => c.id === id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
};

const updateCategoryById = (req, res) =>{
    const { id } = req.params;
    const categoryIndex = Categories.findIndex(c => c.id === id);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    Categories[categoryIndex] = { ...Categories[categoryIndex], ...req.body };
    res.json(Categories[categoryIndex]);
};

const deleteCategoryById = (req, res) =>{
    const { id } = req.params;
    const categoryIndex = Categories.findIndex(c => c.id === id);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }

    const deletedCategory = Categories[categoryIndex];
    Categories.splice(categoryIndex, 1);
    res.status(200).send();
};

export {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
};