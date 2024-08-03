import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 404;

    res.writeHead(200, {'Content-Type': 'application/json'});

    res.end(JSON.stringify({message: 'Server error'}));
    //res.end('<h1>hello world</h1>');
});

server.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)});