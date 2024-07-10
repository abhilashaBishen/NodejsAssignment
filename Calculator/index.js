
//Importing the crypto module

const crypto = require('crypto');

const args = process.argv.slice(2);

const operation = args[0];

//functions for each operation

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    if(b==0){
        return "Error:b divisor should not be zero";
    }
    else {
        return a/b;
    }
}

function sin(a){
    return Math.sin(a);
}

function cos(a){
    return Math.cos(a);
}

function tan(a){
    return Math.tan(a);
}

function random(length){
    if(!length){
        return 'Enter length for random number'
    }
    const numLength = Number(length);

    const randomBytes = crypto.randomBytes(numLength);

    const binaryString = randomBytes.toString('binary');

    return binaryString;


}

//  a switch statement to determine which operation to perform
switch (operation) {
    case 'add':
      if (args.length !== 3) {
        console.log("write node index.js add <num1> <num2>");
      } else {
        const result = add(Number(args[1]), Number(args[2]));
        console.log(result);
      }
      break;
  
    case 'sub':
      if (args.length !== 3) {
        console.log("write node index.js sub <num1> <num2>");
      } else {
        const result = sub(Number(args[1]), Number(args[2]));
        console.log(result);
      }
      break;
  
    case 'mult':
      if (args.length !== 3) {
        console.log("write node index.js mult <num1> <num2>");
      } else {
        const result = mult(Number(args[1]), Number(args[2]));
        console.log(result);
      }
      break;
  
    case 'divide':
      if (args.length !== 3) {
        console.log("write node index.js divide <num1> <num2>");
      } else {
        const result = divide(Number(args[1]), Number(args[2]));
        console.log(result);
      }
      break;
  
    case 'sin':
      if (args.length !== 2) {
        console.log("write node index.js sin <num>");
      } else {
        const result = sin(Number(args[1]));
        console.log(result);
      }
      break;
  
    case 'cos':
      if (args.length !== 2) {
        console.log("write node index.js cos <num>");
      } else {
        const result = cos(Number(args[1]));
        console.log(result);
      }
      break;
  
    case 'tan':
      if (args.length !== 2) {
        console.log("write node index.js tan <num>");
      } else {
        const result = tan(Number(args[1]));
        console.log(result);
      }
      break;
  
    case 'random':
      const length = args[1];
      const result = random(length);
      console.log(result);
      break;
  
    default:
      console.log("Invalid operation");
  }