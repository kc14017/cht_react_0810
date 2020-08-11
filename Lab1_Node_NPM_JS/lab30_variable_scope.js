function printSomething(x) {
    console.log("before", message)
    if (x>10) {
        var message = "hihi"
    } else {
        var message = "XXXXXX"
    }
    console.log(message)
}
printSomething(5)
printSomething(10)
printSomething(15)