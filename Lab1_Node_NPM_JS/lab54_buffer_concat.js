const buffer1 = Buffer.from('Hello ')
const buffer2 = Buffer.from('World')
const buffer3 = Buffer.from(', node.JS')
const buffer4 = Buffer.concat([buffer1, buffer2, buffer3])
const l1 = buffer1.length+buffer2.length+buffer3.length
const l2 = buffer4.length
console.log(l1, l2)
console.log("buffer4 content="+buffer4.toString())