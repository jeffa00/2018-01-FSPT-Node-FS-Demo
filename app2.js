const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello, World");
fs.appendFile("hello.txt", "Hello, World\n");
