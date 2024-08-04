//import fs from 'fs';
import fs from 'fs/promises';


// // readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// // readFileSync() - Synchornous version // it will block the code

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);


// readFile() - promise .then() .catch()
// fs.readFile('./test.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// readFileSync() - promise async/await
// best way cause simpler code to read
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

// readFile();


// writeFile()

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
        
    }
}

// append file
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended   ');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
        
    }
}

writeFile();
appendFile();
readFile();
