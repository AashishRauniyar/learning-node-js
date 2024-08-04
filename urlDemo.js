import url from 'url';

const urlString = 'http://www.google.com/search?q=node.js';

// URL object
const urlObject = new URL(urlString);

console.log(urlObject);


// format()
console.log(url.format(urlObject));

// import.meta.url - File URL
console.log(import.meta.url);

// fileURLToPath()

const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);


// ?q=node.js
console.log(urlObject.search);

// URLSearchParams object - searchParams
// console.log(urlObject.searchParams);
const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', 5);
params.delete('limit');
console.log(params);





