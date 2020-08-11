function loop1() {
    var i = 100
    for (var i = 0; i < 10; i++) {
        console.log("inner loop:", i)
    }
    console.log("finish, i=", i)
}
loop1()
//console.log("i=",i)
function loop2() {
    j = 150
    for (j = 0; j < 10; j++) {
        console.log("inner loop:", j)
    }
    console.log("finish,j=", j)
}
loop2()
console.log("j=",j)
function loop3() {
    let k = 200;
    for (let k=0; k<10; k++){
        console.log("inner loop:",k)
    }
    console.log("finish, k=",k)
}
loop3()
function loop4() {
    var l = 0
    for (let m = l; m < 10; m++) {
        console.log("m=", m)
    }
    console.log("l=", l)
    //console.log("m=", m)
}
loop4()