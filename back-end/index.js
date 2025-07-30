// import http from "node:http";

// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(req.method)
//     res.writeHead(200, {"content-type": "text/plain"});
//     res.end("Hello World\n");
// });

// server.listen(8000,()=>{
//     console.log("Server running at 8000")
// });


import express from 'express';

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World");
});

const PORT =8000;

app.listen(PORT, ()=>{
    console.log('Servert Running at' {PORT})
})