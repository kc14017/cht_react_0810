global.coffee = 'latte'
global.juice = 'lemonade'
hello = 'world'
var fruit = 'apple'//local variable
function printSomething(name){
    console.time(global[name])
    console.log(name,global[name])    
    console.warn(name,global[name])    
    console.timeEnd(global[name])
}
printSomething('coffee')
printSomething('juice')
printSomething('hello')
printSomething('fruit')
printSomething(fruit)