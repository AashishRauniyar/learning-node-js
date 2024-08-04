import crypto from 'crypto';


// createHash() method is used to create a Hash object that can be used to generate hash digests using the given algorithm.
// const hash = crypto.createHash('sha256');

// hash.update('password1234')
// console.log(hash.digest('hex'));


// randomBytes() method is used to generate cryptographically strong pseudo-random data.
// crypto.randomBytes(8, (err, buf) => {
//     if(err) throw err;
//     console.log(buf.toString('hex'));
// });

// createCipheriv() method is used to create a Cipher object that can be used to encrypt data using the given algorithm and password.
// createDecipheriv() method is used to create a Decipher object that can be used to decrypt data using the given algorithm and password.
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World This is a random message', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log(decrypted);



