class Course {
    constructor() {
        this.duration = 49
    }
    printDuration() {
        console.log(`duration=${this.duration}`)
    }
}
class ReactCourse extends Course {
    constructor() {
        super()
        this.name = 'react'
    }
    printCourse() {
        console.log(`course name = ${this.name}`)
    }
}
const c1 = new ReactCourse()
c1.printCourse()
c1.printDuration()