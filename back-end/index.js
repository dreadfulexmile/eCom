import http from "node:http";

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hello World\n");
});

server.listen(8000,()=>{
    console.log("Server running at 8000")
});
