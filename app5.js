const fs = require("fs"),
    fileName = "bookFile.json",
    book = {
        title: "Tom Sawyer",
        author: "Mark Twain"
    };

    let testStr = JSON.stringify(book);

fs.writeFile(fileName, JSON.stringify(book), function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Success");
    }
});