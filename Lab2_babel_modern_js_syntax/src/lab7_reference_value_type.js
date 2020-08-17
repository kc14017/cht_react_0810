let number1 = 1
const number2 = number1
console.log(number1, number2)
number1 = 5
console.log(number1, number2)
const person = { name: 'Mark' }
const secondPerson = person
const thirdPerson = { ...person }
console.log("before change:", person, secondPerson, thirdPerson)
person.name = "Kelvin"
console.log("after change:", person, secondPerson, thirdPerson)