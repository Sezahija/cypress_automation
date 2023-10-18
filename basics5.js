were creating example of objects now bellow:
let person = {

    firstname: 'Sezahija',
    lastname: 'Muslic'
}
//console.log(person)
console.log(person.lastname)

person.firstname = 'Sezahija Ahmad'
console.log(person.firstname)

person.gender = 'Male'

console.log(person)

delete person.gender
console.log(person)
console.log('Male' in person)

for (let key in person)
{
        console.log(person[key])
}

