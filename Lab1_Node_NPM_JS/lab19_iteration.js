var chosen = [1, 2, 3, 4, 5, 6, 8, 10]
for (var index in chosen) {
    console.log('index=', index, ', value=', chosen[index])
}
for (var item of chosen) {
    console.log('value=', item)
}
var stores = ['7-11', 'fami', 'OK', 'hi-life']
for (index in stores) {
    console.log(`index=${index}, value=${stores[index]}`)
}

var dict1 = { name: 'Mark', role: "R&D", age: 43 }
for (index in dict1) {
    console.log(index, dict1[index])    
}