const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        if(order) {
            resolve('Your Order is Ready. Come and Get It');
        } else {
            reject( Error('Your Order Cannot Be Made'));
        }
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val))
                .catch(err => console.log(err));