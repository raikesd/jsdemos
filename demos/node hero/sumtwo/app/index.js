// app/index.js

const readline = require('readline');

const rl = readline.createInterface( {
	input: process.stdin,
	output: process.stdout
});
tion('First number: ', (num1) => {
  rl.question('Second number: ", (num2) => {
    const answer = num1 + num2;
    console.log(`The sum is: ${answer}`);
  });
  rl.close()
});
