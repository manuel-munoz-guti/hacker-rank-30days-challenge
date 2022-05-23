'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    let number = n;    
    let onesCont = 0;
    let maxOnes = 0;
    
    while(number > 0){
        if(number % 2 !== 0){ // resto 1 binary value 1          
            onesCont++;
            if(onesCont>maxOnes) maxOnes = onesCont;
        } else {
            onesCont = 0; //resets the counter    
        }         
        number = Math.floor(number/2);          
    }
   
    console.log(maxOnes);
}
