const fs = require('fs')
//const FILE_NAME = "README.md"
const FILE_NAME = "XYZ123"
fs.open(FILE_NAME, 'r', (error, handler) => {
    if (error) {
        return console.log("err code=" + error.code + "\n, reason=" + error.message)
    }
    console.log("OK, can do something later")
})