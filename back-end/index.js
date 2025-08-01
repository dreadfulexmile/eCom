import express from 'express';

const app = express();

app.get("/api/products", (req,res)=>{
    res.send("Hello World");
});

const PORT =8000 ||

app.listen(PORT, ()=>{
    console.log(`Servert Running at:${PORT}`);

})