//object literal:
let uData = {
    name: '',
    class: '',
    rollNo: '',
    age: '',
    address: ''

}


function  userData(name, grade, rollNo, age, address){
    this.name = name;
    this.grade = grade;
    this.rollNo = rollNo;
    this.age = age;
    this.address = address;
    

}

const userGuy = new userData('Abdullah', 16, 18, 26, 'California');
const secondUserGuy = new userData('Saleem', 16, 28, 26, 'Kutly');

console.log(userGuy);
console.log(secondUserGuy);
console.log(secondUserGuy.constructor);

