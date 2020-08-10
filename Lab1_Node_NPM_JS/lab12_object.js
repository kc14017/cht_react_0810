var user1 = {
    name:'Mark',
    location:'Taipei',
    role:"R&D"
}
var user2 = {}
console.log(user1, user2)
console.log(user2.name)
user2['name']='James'
user2.location = 'Taichung'
console.log(user2, user2.name, user2.location, user2.role)
user2['role']='FAE'
console.log("user2 role=",user2)
delete user2.name
console.log(user2)
console.log(Object.keys(user2))
console.log(Object.keys(user2).length)