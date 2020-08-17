class Course {
    duration = 49
    printDuration = () => {
        return `duration = ${this.duration}`
    }
}
class ReactCourse extends Course {
    name = 'React'
    printCourse = () => {
        return `course name = ${this.name}`
    }
}
const c1 = new ReactCourse()
console.log(`c1 course ${c1.printDuration()}, ${c1.printCourse()}`)