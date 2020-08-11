function Car() {
    this.speed = 0
    this.getSpeed = function () {
        return this.speed
    }
}
var myCarRun = function() {
    console.log("super fast");
}
var myCar = new Car()
myCarRun()
console.log(myCar.getSpeed())
myCar.speed=50
console.log(myCar.getSpeed())