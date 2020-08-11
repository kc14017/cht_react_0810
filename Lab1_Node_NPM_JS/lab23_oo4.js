class Car {
    constructor() {
        this.speed = 0
    }
}
car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)
console.log("now print with car2")
var car2 = {
    speed: 0,
    getSpeed: function () {
        console.log(this.speed)
    },
    getSpeed2: function () {
        setTimeout(function () {
            console.log("catch this in async")
            console.log(this.speed)
        }, 2000)
    },
    getSpeed3: function () {
        var that = this
        setTimeout(function () {
            console.log("use that to cache this")
            console.log(that.speed)
        }, 4000)
    },
    getSpeed4: function () {
        setTimeout(() => {//透過箭頭方式呼叫可讀到this參數值
            console.log("now using arrow function")
            console.log(this.speed)
        }, 6000)
    }
}
car2.speed = 888
car2.getSpeed()
car2.getSpeed2()
car2.getSpeed3()
car2.getSpeed4()