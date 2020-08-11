function Car() {
}
Car.prototype.speed = 0
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function(speed){
    Car.prototype.speed = speed
}
var myCarRun = function() {
    console.log("super fast");
}
var myCar = new Car()
myCarRun()
console.log(myCar.getSpeed())
myCar.setSpeed(50)
console.log(myCar.getSpeed())