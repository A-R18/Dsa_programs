async function newFunc() {

    let task1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Task one executed after 3 seconds.`)
        }, 3000);
    });


    let task2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Task two executed after 6 seconds.`)
        }, 6000);
    });


    console.log(`Waiting for task 1 to be accomplished!`);
    await task1;
    console.log(`Waiting for task 2 to be accomplished!`);
    await task2;


    console.log([task1, task2]);
}


newFunc();
