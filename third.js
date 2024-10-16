//A loop being practiced along with the understanding of break and continue.
// let arr =['Comodia', 'Columbia', 'Czec Repub.', 'Chile', 'Canada']
// for(let i=0; i<=arr.length;i++){

//     if(arr[i]=='Columbia')
//         {
//             console.log(`This is a break point which is associated with ${i} value of array`);
//             continue;
//         }

//         console.log(`This loops continues while skips the respective continue statement ${i}`)
// }


// let index = 500000;
// let longArr = [index];
// for (let i of longArr) {
//     while(i>=0){
//     console.log(`The values of Long Arrary are ${i}`)
//     i--
//     }
// }



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

// for (let i = 0; i < Object.keys(footballStars).length; i++) {
//     console.log(`The shirt no. of ${Object.keys(footballStars)[i]} is ${Object.values(footballStars)[i]}`);
// }

// console.log(Object.keys(footballStars).length);

let topTestCricketers = [
    { "age": 47, "runs": 15921, "matches": 200, "highestScore": 248, "centuries": 51 },
    { "age": 48, "runs": 13378, "matches": 168, "highestScore": 257, "centuries": 41 },
    { "age": 48, "runs": 13289, "matches": 166, "highestScore": 224, "centuries": 45 },
    { "age": 55, "runs": 11953, "matches": 131, "highestScore": 400, "centuries": 34 },
    { "age": 51, "runs": 13288, "matches": 164, "highestScore": 270, "centuries": 36 },
    { "age": 46, "runs": 12400, "matches": 134, "highestScore": 319, "centuries": 38 },
    { "age": 74, "runs": 10122, "matches": 125, "highestScore": 236, "centuries": 34 },
    { "age": 58, "runs": 10927, "matches": 168, "highestScore": 200, "centuries": 32 },
    { "age": 35, "runs": 8676, "matches": 111, "highestScore": 254, "centuries": 29 },
    { "age": 68, "runs": 11174, "matches": 156, "highestScore": 205, "centuries": 27 },
    { "age": 39, "runs": 12472, "matches": 161, "highestScore": 294, "centuries": 33 },
    { "age": 46, "runs": 10099, "matches": 118, "highestScore": 313, "centuries": 34 },
    { "age": 43, "runs": 9265, "matches": 117, "highestScore": 277, "centuries": 27 },
    { "age": 40, "runs": 8765, "matches": 114, "highestScore": 278, "centuries": 22 },
    { "age": 33, "runs": 10949, "matches": 130, "highestScore": 254, "centuries": 30 }
];

let testRuns = [
    15921,
    13378,
    13289,
    11953,
    13288,
    12400,
    10122,
    10927,
    8676,
    11174,
    12472,
    1009,
    9265,
    8765,
    10949,
];



// shortlistedpeople = topTestCricketers.filter((crkicketer) => {
//     return crkicketer.highestScore>=250&&crkicketer.centuries>=35&&crkicketer.age>=40;
// })

// console.log(shortlistedpeople);

// let combinedTestRuns = testRuns.reduce((sum, runs) => {
//     return sum+runs/5;
// }, 8);

// console.log(combinedTestRuns);

let arrNumbrz = [];
let newARR = [];
let message = prompt(`How many numbers you want to enter?`);
let l = 1;
while (l <= message) {
    let number = parseInt(prompt(`Give Entry no. ${l}`));
    arrNumbrz.push(number);
    l++;
    // number = '';
}
alert(`The numbers entered by you are: ${arrNumbrz}`);
for (const item of arrNumbrz) {
    let squaredNumber = item * item;
    newARR.push(squaredNumber);
}
alert(`The squares of elements of this array are: ${newARR}`);

