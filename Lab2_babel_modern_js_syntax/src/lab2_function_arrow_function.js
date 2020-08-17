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