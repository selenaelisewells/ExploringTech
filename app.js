const http = require('http');

//to make this more modern use JS import

// const hostname = '127.0.0.1'; // this is the localhost
const port = process.env.PORT || 3000; //localhost: 3000 - says if this fails use localhost

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Darkness');
});

server.listen(port, () => {
    console.log(`Server is now running at ${port}/`);
});