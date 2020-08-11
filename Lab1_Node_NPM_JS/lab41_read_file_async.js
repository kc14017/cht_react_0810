var fs = require('fs')
const FILE_PATH = "README.md"
const READ_LIMIT = 10000
fs.open(FILE_PATH, 'r', (error, handler) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("file opened, continue")
    let buffer = new Buffer.alloc(READ_LIMIT)
    fs.read(handler, buffer, 0, READ_LIMIT, null, (error, length) => {
        console.log(`total:${length} bytes`)
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handler, () => { console.log("close successfully") })
    })
})