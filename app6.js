const fs = require("fs"),
    fileName = "bookFile.json";

fs.readFile(fileName, "utf8", (err, data) => {
    console.log(data);
    let book = JSON.parse(data);
});