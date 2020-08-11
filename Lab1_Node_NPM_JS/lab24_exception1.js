function oops() {
    throw new Error("something strange happen")
}
console.log("before oops")
try {

    oops()
} catch (e) {
    console.log("something strage happen, reason:", e.toString(), e)
}
console.log("after oops")