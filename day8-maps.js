function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    let entries = parseInt(inputArr[0]);   
    let phoneBook = new Map();
    
    for(let i = 1; i<entries+1 ;i++){
        let row = inputArr[i].split(' ');              
        phoneBook.set(row[0], row[1]);
    }
    
    for(let j=entries+1; j<inputArr.length; j++){
        if(phoneBook.has(inputArr[j])){
            console.log(inputArr[j]+"="+phoneBook.get(inputArr[j]));
        } else {
            console.log("Not found");
        }
    }   
 } 
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 _input = "";
 process.stdin.on("data", function (input) {
     _input += input;
 });
 
 process.stdin.on("end", function () {
    processData(_input);
 });
 