import categories from "./categories.model.js";

// getbyid
app.get("/api/products/:id", (req,res) => {
    console.log(req.params);
    const product = products.find((p) => p._id === req.params.id);
    if(!product) {
        return res.status(404).json({message: "Product Not Found!"})
    }
    res.json(product);
});

app.get("/api/categories/:id", (req,res) => {
    console.log(req.params);
    const category = categories.find((c) => c._id === req.params.id);
    if (!category){
        return res.status(404).json({message: "Category Not Found!"})
    }
    res.json(category);
});

// insertRequests
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
    res.status(201).json({message: "Product is added!"});
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
    res.status(201).send({message: "Category is added!"})
});

//updateRequests
app.put("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((p) => String(p._id) === String(id));
    if (index === -1) {
        return res.status(404).json({ message: "Product Not Found!" });
    }

    const { name, price, description, categoryId } = req.body;
    const existing = products[index];

    const updatedProduct = {
        ...existing,
        name: name !== undefined ? name : existing.name,
        price: price !== undefined ? price : existing.price,
        description: description !== undefined ? description : existing.description,
        categoryId: categoryId !== undefined ? categoryId : existing.categoryId,
    };

    products[index] = updatedProduct;
    res.json(updatedProduct);
});
  

// deleteRequests
app.delete("/api/products/:id", (req,res) =>{
    console.log(req.params);
    const product = products.find((p) => p._id === req.params.id);
    if(!product) {
        return res.status(404).json({message: "Product Not Found!"})
    }
    res.json({message: "Product Deleted!"}); 
});

app.delete("/api/categories/:id", (req, res) => {
    const categoryIndex = categories.findIndex((c) => c._id === req.params.id);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: "Category Not Found!" });
    }
    categories.splice(categoryIndex, 1);
    res.json({ message: "Category Deleted!" });
});