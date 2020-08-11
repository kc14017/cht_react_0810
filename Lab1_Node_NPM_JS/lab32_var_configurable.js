var v1 = 100
v2 = 200
console.log(v1, v2)
delete global.v2
delete global.v1
console.log(v1)
v2 = 300
console.log(v1, v2)
delete v2
console.log(v1)
function bar() {
    var v3 = 300
    v4 = 400
    console.log(v3, v4)
    delete v3
    delete v4
    console.log(v3)
    //console.log(v4)
    v4 = 500
    console.log(v3, v4)
    delete this.v4
    console.log(v3)
    //console.log(v4)
    v4 = 600
    console.log(v3, v4)
    delete global.v4
    console.log(v3)
    //console.log(v4)
}
bar()