const person = {
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet: function(age, punctuation){
        console.log(`I am ${age} years old${punctuation}`)
    }
}

const person2 = {
    firstName: 'Eduard',
    lastName: 'Mihail'
}

// person.fullName.call(person2)
// person.greet.call(person2, 21,'.')
// person.greet.apply(person2, [24, '.'])

const bound = person.greet.bind(person2, 24) //SAU const bound = person.greet.bind(person2) \n console.log(bound) \n bound(24, '.')
console.log(bound)

bound('.')