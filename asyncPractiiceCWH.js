// let prom = new Promise((resolve, reject)=>{

// let script = document.createElement('script');

// script.src = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>' 
//  document.head.appendChild(script);

// resolve();

// });

// prom.then(()=>{
// alert('Script has been loaded');
// });


// async function delayedExe() {
//     let prom1 = new Promise((resolve, reject) => {
// console.log(`yaha tk theek ha!`);
//         setTimeout(() => {

//             let script = document.createElement('script');
//             script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';

//             document.head.appendChild(script);
//             console.log(`Script has been added in the page successfully!`);
//         }, 4000);

//     });

//     await prom1;
//     console.log(`Script has been loaded after the await statement execution`);


// }

// try {
//     delayedExe();

// } catch (error) {
//     console.log(error);
// }

// async function myFunc2(){
// let prom3 = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         try{
//         conole.log('Is this an error');
//         resolve();
//     }
//     catch(err){
//         console.log(err+` This is the error which has been thrown deliberately!`);
//     }
//     }, 3000);




// });
// // console.log(prm3);
// await prom3;
// console.log(prom3);

// }

// myFunc2();

let nwtReq = fetch('https://api.github.com/users/A-R18');

nwtReq.then((response) => {
    return response.json()
}).then((response) => {
    
    console.log(response);
});


