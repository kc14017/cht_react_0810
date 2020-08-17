const string1 = "Hello"
const string2 = "I say"
//string1.compare(string2)
const result0 = string1.localeCompare(string2)
console.log(result0)
const buffer1 = Buffer.from(string1)
const buffer2 = Buffer.from(string2)
const result1 = buffer1.compare(buffer2)
if (result1 < 0) {
    console.log(`${buffer2} should come after ${buffer1}`)
} else if (result1 == 0) {
    console.log(`${buffer2} is equal to ${buffer1}`)
} else {
    console.log(`${buffer2} should come before ${buffer1}`)
}
