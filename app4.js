const fs = require("fs");

let myFileContents = fs.readFile("hello.txt","utf8", function(err, data){
    console.log(data);
});


console.log(myFileContents);