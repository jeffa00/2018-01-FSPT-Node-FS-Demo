const fs = require("fs"),
    fileName = "bookListFile.json",
    books = [];

    books.push( {
        title: "Tom Sawyer",
        author: "Mark Twain"
    });


    books.push( {
        title: "My Book",
        author: "Bob Smith"
    });

    let testStr = JSON.stringify(books);

fs.writeFile(fileName, JSON.stringify(books), function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Success");
    }
});