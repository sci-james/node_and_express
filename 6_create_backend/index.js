const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

// Adding html files
const home = fs.readFileSync('index.htm');
const about = fs.readFileSync('about.htm');
const contact = fs.readFileSync('contact.htm');


const server = http.createServer((req,res)=>{
    console.log(req.url)
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(home);
      });
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });