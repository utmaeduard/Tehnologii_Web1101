const person = {
    name: 'Eduard',
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

person

function User(email, name){
    this.email=email;
    this.name=name;
    this.online = false;
}

User.prototype.login = function(){
    this.online=true;
    console.log('User has logged in.');
}

const user = new User('email@email.ro', 'Eduard');


console.log(user);
console.log(person);
