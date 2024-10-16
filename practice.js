// const age = parseInt(prompt("Enter your age please"));
// if (age < 0) {
//     console.error(`Please enter a valid age`);

// }
// else if (age >= 1 && age < 18) {
//     alert(`You can't drive yet please wait until you turn 18!`);

// }
// else if (age > 18 && age <= 75) {
//     alert(`You can drive if you have a driving license!`);

// }
// else if (age >= 76 && age < 90) {
//     alert(`please consider someone to drive your car, it can be dangerous for you to drive!`);
// }
// else if (age > 90) {
//     alert(`You're overaged, you are ineligible to drive the car!`);
// }
// else {
//     alert(`You've enter an invalid number!`);
// }


// let num = prompt("Enter a number, if greater than 4 it will redirect to Google");
// num = Number.parseInt(num);
// console.log(typeof(num));
// if (num >4) {
//     location.href =  `https://google.com`;
// }


// const color = prompt(`Enter the color you want to apply to the body of this webpage`);


// document.body.style.backgroundColor = color;
let playgame = 'true';
if (playgame) {
    function createRandom() {
        const letters = ['S', 'W', 'G'];

        const randomLetter = Math.floor(Math.random() * letters.length);
        console.log(letters[randomLetter]);
        return letters[randomLetter];
    }
}

function gameLogic() {

    const randomGeneratedNo = createRandom();
    const userGuess = prompt('Enter your guess plese which should be S W or G');

    if (randomGeneratedNo === userGuess) {
        alert(`Congratulations you've won the game! It was:  ${randomGeneratedNo}`);

    }
    else {
        alert(`You lost please try again It was:  ${randomGeneratedNo}`);
        const decider = confirm(`Do you want to play again`);
        if (decider) {
            createRandom();
            gameLogic();
        }
        else {

            playgame = 'false';
        }
    }
}
gameLogic();


