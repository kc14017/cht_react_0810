function scopeTest() {
    console.log("x=",x)
    var x= 5;
    console.log("x=",x)
    var x = 6;
    console.log("x=",x)
    //console.log("y=",y)
    let y= 3;
    console.log("y=",y)
    //let y = 5
    if (true) {
        let y=5
    }
    console.log("y=",y)
}
scopeTest()