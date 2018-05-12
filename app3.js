const fs = require("fs");

for(let i = 0; i < 10000; i++){
    console.log(i);

    fs.appendFile("hello2.txt", i + " Hello, World!\n", function(err){
        if(err){
            console.log("Ack! There was an error! " + err);
        } else {
            console.log(i + " Success! File Written");
        }
    });
}