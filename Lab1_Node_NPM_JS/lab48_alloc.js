for(let i=0; i<2; i++){
    const buffer1 = Buffer.allocUnsafe(30)
    console.log(buffer1)
    buffer1.fill(0)
    console.log(buffer1)
}
console.log("allocate safe")
for(let i=0; i<2; i++){
    const buffer1 = Buffer.alloc(30)
    console.log(buffer1)
}
console.log("unspecified")
for(let i=0; i<2; i++){
    const buffer1 = new Buffer(30)
    console.log(buffer1)
}