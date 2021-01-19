const http = require('http');

//to make this more modern use JS import


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Darkness');
});

server.listen(port,() => {
    console.log(`Server running at ${port}/`);
});
