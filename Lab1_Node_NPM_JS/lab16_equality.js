var x1 = 123
var x2 = '123'
var x3 = 12.34
var x4 = '12.34'
var x5 = 'hello'
var x6 = 'Hello'
console.log(x1 == x2, x1 === x2)
console.log(x3 == x4, x3 === x4)
console.log(x5 == x6, x5 ==x6.toLocaleLowerCase())
var x7 = 1234
var x8 = new Number(1234)
console.log(typeof x7, typeof x8)
console.log(x7+x8)
console.log(x7==x8, x7===x8)