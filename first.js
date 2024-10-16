// console.log("hey");
// console.error("what?")

// console.log(f);

// let g = [];

// let aToBoolean = Boolean(a);
// console.log(aToBoolean); 
// console.log(typeof(aToBoolean)); 

// let btoNumber = Number(b);
// console.log(btoNumber); 
// console.log(typeof(btoNumber)); 


// console.log(null == 0);


// console.log(h)

// console.log(typeof(h))
// console.table([a, b, c, f, l]);
//declared an object with const type, and then tried to change one of its indexes but got:
// const items = {
//     ShirtNo9: "Lewandoski",
//     ShirtNo19: "Lamine",
//     ShirtNo23: "Kunde",
//     ShirtNo8: "Pedri",
//     ShirtNo6: "Gavi"
// };
// // console.log(items);
// yourString = "Today's a sunny day and I tried to enjoy it, sometimes it's very difficult to enjoy things with your own will";
// myString = new String("Today's a rainy day and I tried to enjoy it, sometimes it's very difficult to enjoy things with your own will");

// // console.log(myString);
// for (let i = 0; i < yourString.length; i++) {
//     // console.log(myString[i]);
// }
// let cred ={
//  name : "Abishek",
//  age : "23",
//  height:"6'1"
// }
// cred.Address= "Mohalla Guyeti Gayak Laal, Bhraman gali, Haryana, India"
// console.log(`The height of ${cred.name} is ${cred.height}, This guy is actually ${cred.age} years old, Address is ${cred.Address}.`.toUpperCase())
// console.log(myString.toUpperCase());
// let age = prompt("Please enter your age.");
// age = parseInt(age);
// if (age>=4&&age<=11){
//     alert("You're a kid, don't think too much");
// }else if(age>=12&&age<18){
// alert("You'll have to wait until you become 18 years old")
// }
// else if(age>=18&&age<=70){
//     alert("Yes you can have an identity card, go and registger yourself for the due process!");
// }
// else if(age>70){
//     alert("It's very late you can have one, but now your age is exteremely considerate for various aspects of life.");
// }
// else{
//     alert("You've entered an invalid age.");
// }
// let day = prompt("Please Enter a day of week to check working status!");
// day = parseInt(day);
// switch (day){
//     case 1:{
//         alert("Today is Monday, You've have to be at the office today, It's ON");
//         break;
//     }
//     case 2:{
//         alert("Tuesday Baby! You've have to be at the office today, It's ON");
//         break;
//     }
//     case 3:{
//         alert("Wednesday, Office meeting day! You've have to be at the office today, It's ON");
//         break;
//     }
//     case 4:{
//         alert("Jummarat, You've have to be at the office today, It's ON");
//         break;
//     }
//     case 5:{
//         alert("Jumma ha G, You've have to be at the office today, It's ON");
//         break;
//     }
//     case 6:{
//         alert("Hafta bolay to Hafta!! You've have to be at the office today, It's ON");
//         break;
//     }
//     case 7:{
//         alert(" It's OFF today!");
//         break;
//     }
//     default:
//         alert("You've made an invalid selection!");
//}
// let a = prompt("Enter a number which you want to check")
// a  = parseInt(a);
// if(a%2==0&&a%3==0){
//     alert("The number is divisible by 2 & 3")  
// }
// else{
//     alert("The number isn't divisible by 2 and 3")
// }
// let a = prompt("Enter a number which you want to check")
// a  = parseInt(a);
// switch(a){
//     case 2:{
//         if (a%2){
//     alert("The number is divisible by 2.");
//         }
//     break;
//     }
//     case 3:{
//         if (a%3){
//             alert("The number is divisible by 2.");
//                 }
//     break;
//     }
//     default:
//         alert("The number is neither divisible by 3 nor by 2.");
// }

// let age = prompt("Enter your age please!");
// age = parseInt(age);
// age>=18?alert("Your age is valid"):alert("Your age is invalid");


// let currentDate = Date.now();
// let currentDate = new Date('2023-01-04');

// // console.log(currentDate.toJSON());
// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp.toPrecision()/1000/60/60/24/30/12));


// let cities=[];
// cities.push('kamra', 'Islamabad', 'Abbottabad', 'Karachi', 'Lahore');


// result = cities.slice(0,2);
// console.log('Slice Data',result);
// console.log('After Splice',cities);


let footballStars = {
    Messi: 10,
    Ronaldo: 7,
    Neymar: 10,
    Mbappe: 7,
    Lewandowski: 9,
    DeBruyne: 17,
    Salah: 11,
    Kane: 10,
    Benzema: 9,
    Haaland: 9,
    Modric: 10,
    Hazard: 7,
    Mane: 10,
    Pogba: 6,
    Kimmich: 6,
    Ramos: 4,
    VanDijk: 4,
    Alisson: 1,
    Oblak: 13,
    TerStegen: 1,
    BrunoFernandes: 8,
    Grealish: 10,
    Foden: 47,
    Sterling: 7,
    Lukaku: 90,
    Dybala: 21,
    Chiesa: 22,
    Donnarumma: 99,
    Kante: 7,
    Verratti: 6,
    Robertson: 26,
    AlexanderArnold: 66,
    Sancho: 25,
    Gnabry: 7,
    Muller: 25,
    Immobile: 17,
    Griezmann: 8,
    Kroos: 8,
    Casemiro: 18,
    Thiago: 6,
    Suarez: 9,
    Courtois: 1,
    Ederson: 31,
    Rakitic: 10,
    Eriksen: 10,
    Depay: 9,
    Insigne: 24,
    Kolarov: 11,
    Chiellini: 3,
    Bonucci: 19
};


// let c = prompt('Enter a digit which comes in the end of a star footballer name');
// c= c.toString(c);
// for (const a in footballStars) {
//     if(a.endsWith(c)){
//         alert(' Shirt no. of ' +a+' is '+  footballStars[a]);
//     }
// }

// let playersArray = Object.values(footballStars);
// console.log(playersArray);

// let i = 0;
// playersArray.forEach(a => {
//     i<=playersArray.length;
    
//     i++
// });

// let slice = playersArray.slice( 0,10);
// console.log('Slice Result '+slice );

// console.log(footballStars);

// let student = {
// "Name" : "Sadaf Maqsood Khan",
// Age: 34,
// Rollno: 33434,
// Address: "Lyari, Karachi, Pakistan",
// Programme: "BS(Computer Science)",
// isPresentToday: false,
// Religion : null

// };
//  console.log(student["Name"], student.Age);
//  console.error(student["Name"], student.Age);

let myObj = {
    Id: "34fd",
    Name: "Khalli Walli",
    City: "JoanPur",
    Address: "Dehli",
    Contact: "+91234848559"
}


// let combinedObject = {...myObj,...student};
// let j= Object.keys(combinedObject);
// let k= Object.values(combinedObject);
// console.log(j, k);
// let {} = combinedObject;

let studentsMarks = {
Eman:33, 
Abiya: 32, 
Noor: 30, 
Chinese: 29, 
Punjabi: 22,
StatusTeller: function yourMarks(){
    console.log(`Dear! ${Object.keys(studentsMarks)[0]} Your marks are ${this.Eman}`);
    
}
};
 
// console.log(studentsMarks);


// for (let index = 0; index<Object.keys(studentsMarks).length; index++){
//     console.log(`The marks of ${Object.keys(studentsMarks)[index]} are ${Object.values(studentsMarks)[index]}`);

// }
// for (let key in studentsMarks){
//     console.log(`Marks of ${key } are ${studentsMarks[key]}` )
// }


// function meanFinder(n1, n2, n3, n4, n5){

//      n1 = parseInt(prompt(`Enter first number `));
//      n2 = parseInt(prompt(`Enter second number `));
//      n3 = parseInt(prompt(`Enter third number `));
//      n4 = parseInt(prompt(`Enter fourth number `));
//      n5 = parseInt(prompt(`Enter fifth number `));
     
//     let mean = (n1+n2+n3+n4+n5)/5;
//     alert(`The mean of 5 number entered by you is: ${mean}`);
//     return mean
// }

// meanFinder(2, 4, 5, 7, 8);
//25 videos completed (chai aur code)
