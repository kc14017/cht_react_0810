function displayCourseName(name) {
    console.log(`[1] course name=${name}`)
}
const displayCourseName2 = (name) => {
    console.log(`[2]course name=${name}`)
}
const displayCourseName3 = name => console.log(`[3] course name=${name}`)

const displayCourseName4 = () => {
    console.log(`[4] course name=unknown`)
}
const earning = (attendee) => {
    return attendee * 8000
}
const earning2 = attendee => attendee * 8000

displayCourseName("React")
displayCourseName2("React and spring boot")
displayCourseName3("React and rest")
displayCourseName4()
console.log(`earning1 = ${earning(5)}`)
console.log(`earning2 = ${earning2(10)}`)