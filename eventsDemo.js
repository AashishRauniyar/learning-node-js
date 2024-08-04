import {EventEmitter} from 'events';

//Used for real time applications


const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello '+ name);
}

function goodByeHandler(name){
    console.log('Goodbye '+ name);
}


// Register Event Listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');


// Error events
myEmitter.on('error', (err)=>{
    console.log('An error occured', err);
    
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));
