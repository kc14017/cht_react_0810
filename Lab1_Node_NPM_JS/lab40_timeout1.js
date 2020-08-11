console.log('program start')
//非同步asyc
setTimeout(() => { console.log("job1 finshed") }, 4000)
setTimeout(() => { console.log("job2 finshed") }, 7000)
setTimeout(() => { console.log("job3 finshed") }, 1000)
console.log('program ended')