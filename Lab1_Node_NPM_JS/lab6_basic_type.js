console.log('i', 'am', 'a', 'variable')
console.log("10, 3.14 type=", typeof 10, typeof 3.14)
console.log("double, single quote string type=", typeof 'h', typeof "h")
var p1 = {}
console.log("p1 type=", typeof p1)
var p2
console.log("p2 type=", typeof p2)
p2 = {}
console.log("p2 type=", typeof p2, Array.isArray(p2))
var p3 = [3, 4, 5]
console.log("p3 type=", typeof p3, Array.isArray(p3))
function p4() { }// 使用 this不會被catch
console.log("p4 type=", typeof p4)
var p5 = () => { } // 使用 this會被catch
console.log("p5 type=", typeof p5)