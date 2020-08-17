const buffer1 = Buffer.from("Hello World")
const json1 = buffer1.toJSON()
console.log(typeof json1, json1)

const stringFromJson1 = JSON.stringify(json1)
console.log(typeof stringFromJson1, stringFromJson1)
// alternative way
const stringFromJson2 = JSON.stringify(buffer1)
console.log(typeof stringFromJson2, stringFromJson2)

const bufferLoadFromJSON1 = JSON.parse(stringFromJson2, (key, value) => {
    return value.type === 'Buffer' ?
        Buffer.from(value.data) : value;
})
console.log(bufferLoadFromJSON1)