function printSomething(){
    console.log("Hi welcome(cancelable)!")
}

t = setTimeout(printSomething, 4000)
clearTimeout(t)

let counter = 0
function printHello(){
    console.log(`Hello world:${counter}`)
    counter++
    if (counter > 10){
        clearTimeout(timer)
    }
}
timer = setInterval(printHello, 2000)

console.log("lab62 ended")