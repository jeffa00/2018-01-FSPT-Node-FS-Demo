const fs = require("fs"),
    fileName = "bookListFile.json";

fs.readFile(fileName, "utf8", (err, data) => {
    console.log(data);
    let books = JSON.parse(data);
});