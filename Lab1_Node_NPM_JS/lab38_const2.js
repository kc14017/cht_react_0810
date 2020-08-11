const obj1 = {
    id: 1,
    name: 'Mark'
}
let obj2 = {
    id: 2,
    name: 'Frank'
}
console.log(obj1, obj2)
obj1.name = 'Mark Ho'
obj1.location = "TPE"
obj2.role = "FAE"
console.log(obj1, obj2)
obj2 = {}
console.log(obj1, obj2)
//obj1 = {} // oops!
