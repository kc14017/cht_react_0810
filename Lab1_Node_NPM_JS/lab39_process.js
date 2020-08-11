const process = require('process')
const fs = require('fs')
const FILE_PATH = "README.md"
console.log("program started")
console.log(process.cwd())
const file1 = fs.readFileSync(FILE_PATH)
console.log(typeof file1)
console.log(file1.toString())
console.log("Program Ended")