const http = require('http');
const stream = require('fs');

//to make this more modern use JS import

// const hostname = '127.0.0.1'; // this is the localhost
const port = process.env.PORT || 3000; //localhost: 3000 - says if this fails use localhost

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let url = req.url; //localhost:3000/contact

    switch (url) {
        case "/contact":
            stream.readFile('contact.html', null, ((err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write('404 not found');
                } else {
                    res.write(data);
                }
            }))
            break;
        case "/portfolio":
            stream.readFile('portfolio.html', null, ((err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write('404 not found');
                } else {
                    res.write(data);
                }
            }))
            break;
    }

    res.end('Hello Darkness');
});

server.listen(port, () => {
    console.log(`Server is now running at ${port}/`);
});