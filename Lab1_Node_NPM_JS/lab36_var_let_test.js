var a = 100
var b = 200
if (a === 100) {
    console.log("inside scope, b=",b)
    //console.log("inside scope, a=",a)
    let a = 50
    var b = 400
    console.log(a, b)
}
function xyz() {
    console.log("inside xyz scope, b=",b)
    //console.log("inside scope, a=",a)
    let a = 55
    var b = 444
    console.log(a, b)
}
console.log(a, b)
xyz()