import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
];


// Logger middleware
const logger = (req, res, next) => {
    console.log(`Route: ${req.url} - Method: ${req.method}`);
    next();
}

// Json middle ware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Router handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
}

// Route handler for POST /api/users
const createUserHandler=(req,res)=>{
    let body = '';

    // listen for the data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {

        // json parse is used to convert the string to json object
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(newUser));
        res.end();
    });
}

// Not found handler 
const notFoundHandler = (req, res) => {
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}


const server = createServer((req, res) => {
    logger(req, res, () => {

        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req, res);
            } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }else {
                notFoundHandler(req, res);
            }
        })
    });

})


server.listen(PORT, () => { console.log(`server is running on port ${PORT}`) });