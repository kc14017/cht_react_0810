var s1 = 'qwertyuiop1234567890'
var a1 = Array.from(s1)
console.log(typeof a1, a1)
var a2 = a1.splice(3, 5)
console.log(a2)
console.log(a1)
console.log(a2.pop(), a2)
console.log(a2.pop(), a2)
console.log(a2.pop(), a2)
a2.unshift('p')
console.log(a2)
console.log(a2.shift(), a2)
// join
var a3 = [1, 2, 3, 4, 5]
var r3 = a3.join()
console.log(typeof r3, r3)
var r4 = a3.join('-')
console.log(typeof r4, r4)
var a5 = Array.from('helloworkdjavascript')
a5.sort()
console.log(a5)
var summation = 0
a3.forEach(function (element) {
    summation += element
}, this)
console.log('summation=', summation)