class Student {
    constructor(name, age, grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}


//nu putem folosi this inainte de super
class Teacher extends Student {
    constructor(name, age, grade, subject){
        super(name,age,grade);
        this.subject=subject;
    }
    teach(){
        console.log(`I teach ${this.subject}`)
    }
    

}
const student = new Student('Eduard', 21,12);
const teacher = new Teacher('Andrei', 30, 12, 'Contabilitate');

console.log(student);
console.log(teacher);
