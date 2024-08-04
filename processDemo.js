// argv is an array that contains the command line arguments passed to the script
console.log(process.argv);
console.log(process.argv[3]);

// process.env contains the user environment
console.log(process.env.LOGNAME);


// pid
console.log(process.pid);

// cwd - current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

process.on('exit', (code)=>{
    console.log('Process exited with code: ', code);
});



// exit()
process.exit(0);

// this does not get executed, as we have exited the process
console.log('Hello from after exit');




