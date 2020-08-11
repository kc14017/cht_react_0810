const { exception } = require("console");

try {
    //throw new Error("HAHA")
    setTimeout(() => {
        try{
            throw new Error("HAHA") 
        } catch(e){
            console.log("got an error in setTimeout:",e)
        }
        }, 200)
        console.log("do something else...")
} catch (e) {
    console.log("got an error:" + e)
}
console.log("program terminated")