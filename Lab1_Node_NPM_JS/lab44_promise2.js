var myFunction = function () {
    throw new Error("oops")
    //console.log("things done success")
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(2000).then(myFunction).catch(error => {
    console.log("error is:" + error)
})