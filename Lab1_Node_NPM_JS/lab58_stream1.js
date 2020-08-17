const fs = require('fs')
let data = ''
console.log(`current working directory:${process.cwd()}`)
console.log(`internal variable __dirname=${__dirname}`)
const readerStream = fs.createReadStream('README.md')
readerStream.setEncoding('UTF8')

readerStream.on('data', function (chunk) {
    console.log('.')
    data += chunk
})
readerStream.on('end', function(){
    console.log('xxxxxxxxxxxxxxxxxx')
    console.log(data)
})
readerStream.on('error', function(err){
    console.log(err.stack)
})
console.log("program ended")