function var_test1() {
    console.log('1 x=', x)
    var x = 100;
    console.log('2 x=', x)
    if (true) {
        var x = 200;
        console.log('3 x=', x)
    }
    console.log('4 x=', x)
}
function let_test1() {
    //console.log('1 y=',y)
    let y = 100;
    console.log('2 y=', y)
    if (true) {
        let y = 200
        console.log('3 y=', y)
    }
    console.log('4 y=', y)
}
var_test1()
let_test1()