const user = {
    id: 42,
    is_verified: true
}
//const {id, is_verified} = user
const { id } = user
//console.log(id, is_verified, user.id, user.is_verified)
console.log(id, user.id, user.is_verified)
const numbers = [2, 4, 6, 8, 10]
const [n1, n2, n3] = numbers
console.log(n1, n2, n3)
const employee = { name: "Mark", age: 44, role:"RD", location:"taipei" }
const {name, age, location} = employee
console.log(age, name, location)