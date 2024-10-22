
const nbClr = document.getElementById('nbr');

nbClr.firstElementChild.firstElementChild.style.color = 'red';

nbClr.firstElementChild.lastElementChild.style.color = 'orange';


const listITems = document.getElementsByTagName('li');
console.log(listITems);
const litmz = Array.from(listITems);
litmz.forEach(li => {

});
// let a =['red', 'blue', 'green', 'purple', 'cyan', 'orange', 'beige', 'black', 'grey'];
let i = 0;

nbClr.addEventListener('click', function () {
    setInterval(() => {

        nbClr.style.backgroundColor = a[i];
        i++
        if (i >= a.length) {
            i = 0;
        }
    }, 300);

});