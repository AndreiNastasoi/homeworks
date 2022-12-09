class Person {
 static height = 175;
 static weight = 75;

 constructor(age, firstName, lastName) {
    this.age = 0;
    this.firstName = firstName;
    this.lastName = lastName;

 }
 get fullName(){
    return `$(this.firstName) $(this.lastName)`;
 }
 set fullName(name){
    const fullName = name.split(" ");
    this.firstName = fullName [0];
    this.lastName = fullName [1];
 }
 
 walk() {
    console.log("constructor", this);
 }

}

const Cosmin = new Person (41, "Cosmin", "Vasile");
console.log(Cosmin);
console.log(Cosmin, fullName);
Person.walk();