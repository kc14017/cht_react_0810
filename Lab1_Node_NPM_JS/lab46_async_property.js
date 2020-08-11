const fs = require('fs')
function FileObject() {
    this.filename = ''
    this.file_exists = function (callback) {
        console.log("what is this?" + this, this.filename)
        console.log("about to open:" + this.filename)
        fs.open(this.filename, 'r', (error, handler) => {
            console.log("what is this?" + this, this.filename)
            if (error) {
                console.log("can not open:" + this.filename)
                callback(error)
                return
            }
            console.log("the file we process is:" + this.filename)
            console.log("now we can process file with handler" + handler)
            fs.close(handler, function () { })
            callback(null, true);
        })

    }
}

var fo1 = new FileObject()
fo1.filename = "README.mdx"
fo1.file_exists((error, results) => {
    if (error) {
        console.log("error open file:" + error)
        return
    }
    console.log("file exists!", results)
})