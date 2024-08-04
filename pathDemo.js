import path from 'path';
import url from 'url';


const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));


const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);

const __dirname = path.dirname(__filename);
console.log(__dirname);


// join
// no need to decide to use \ or / , it joins automatically
console.log(path.join(__dirname, 'dir1','dir2', 'hello.html'));


// resolve
// it returns an absolute path
console.log(path.resolve(__dirname, 'dir1','dir2', 'hello.html'));

