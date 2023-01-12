'use strict'

// Slice
// const letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters.slice(1, 3));       // b, c
// console.log(letters);

// Splice
// console.log(letters.splice(1, 3));
// console.log(letters);

const amounts = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.table(amounts);

// FOR_EACH METHODS

// For-Of
// for (const amountEL of amounts) {
//     // console.log(amountEL);

//     if (amountEL > 0) {
//         console.log(`Deposit: ${amountEL}`);

//     } else {
//         console.log(`Withdraw: ${Math.abs(amountEL)}`);
//     }
// }
console.log('============================================');
// // FOR EACH


// amounts.forEach(function (amountEL) {
//     return amountEL > 0 ? console.log(`Deposit: ${amountEL}`) : console.log(`Withdraw: ${Math.abs(amountEL)}`);
// })

///////////////////////////////////////
// for (const [i, amountEL] of amounts.entries()) {
//     // console.log(amountEL);

//     if (amountEL > 0) {
//         console.log(`${i + 1} Deposit: ${amountEL}`);

//     } else {
//         console.log(`${i + 1}Withdraw: ${Math.abs(amountEL)}`);
//     }
// }

// amounts.forEach((amountEL, i) => amountEL > 0 ? console.log(`${i + 1} Deposit: ${amountEL}`) : console.log(`Withdraw: ${Math.abs(amountEL)}`));


// MAP
const euroUSD = 1.2;
// const euroXchange = amounts.map(amountEL => amountEL * euroUSD);
// console.log(euroXchange);

// // FOR-OF
// const euroXchange2 = [];
// for (const amountEL of amounts) {
//     euroXchange2.push(amountEL * euroUSD);
// }

// console.log(euroXchange2);




// for (const amountEL of amounts) {
//     // console.log(amountEL);

//     if (amountEL > 0) {
//         console.log(`Deposit: ${amountEL}`);

//     } else {
//         console.log(`Withdraw: ${Math.abs(amountEL)}`);
//     }
// }

// FILTER
// const deposits = amounts.filter(amountEL => amountEL > 0); // Latest Method
// console.log(deposits);

// const deposit2 = [];
// for (const amountEL of amounts) {
//     amountEL > 0 ? deposit2.push(amountEL) : -1;
// }
// console.log(deposit2);


// const Withdraw = amounts.filter(amountEL => amountEL < 0);
// console.log(Withdraw);



// REDUCE-METHODS
// const totalAmount = amounts.reduce((accm, amountEL) => {
//     return accm + amountEL;
// }, 1000);
// console.log(totalAmount);

// let totalAmount2 = 1000;
// for (const amountEL of amounts) totalAmount2 = totalAmount2 += amountEL;
// console.log(totalAmount2);


// REDUCE_METHODS ON AMOUNTS
// const max = amounts.reduce((accm, amountEL) => {
//     if (accm > amountEL) return accm;
//     else return amountEL;
// }, amounts[0]);
// console.log(max);

// const min = amounts.reduce((accm, amountEL) => {
//     if (accm < amountEL) return accm;
//     else return amountEL;
// }, amounts[0]);
// console.log(min)


const incomeArr = [200, 450, -400, 3000, -650, -130, 70, 1300];


// const calcAverage = (arr) => {
//     const avrg = arr.reduce((accm, element) => accm + element);
//     return Math.trunc(avrg / arr.length);
// }
// console.log(calcAverage(incomeArr));

// const calcDepositAvrg = (arr) => {
//     const deposits = arr.filter(el => el > 0);
//     const total = deposits.reduce((accm, el) => accm + el);
//     console.log(deposits)
//     return total / deposits.length;
// }
// console.log(calcDepositAvrg(amounts));

// FILTER // MAP // REDUCE
// const totalDepositUSD = (arr) => {
//     return arr.filter(el => el > 0)
//         .map(el => el * euroUSD)
//         .reduce((accm, el) => accm + el, 0);

// }
// console.log(totalDepositUSD(amounts))

// Find Method

// const firstWithdraw = amounts.find(el => el < 0);
// console.log(firstWithdraw);

// const amounts = [200, 450, -400, 3000, -650, -130, 70, 1300];
const badArr = [-300, 470, -60, 1];
console.log(amounts.includes(3000));  // TRUE

const higherEI = amounts.findIndex(el => el === 3000);
// console.log(higherEI);

// console.log(amounts.slice(2, 5));
// console.log(amounts.splice(1, 2));
// console.log(amounts)

// SOME
// const positiveIntegers = amounts.some(el => el > 0);
// console.log(positiveIntegers);

// EVERY
// const negativeInt = amounts.every(el => el > 0);
// console.log(negativeInt);


// const depoMag = el => el > 0;
// console.log(amounts.filter(depoMag));
// console.log(amounts.some(depoMag));


// const d = new Date();
// const today = new Date('May 25 2022 13:10:42');
// const past = new Date(1993, 5, 12);
// const future = new Date(2040, 11, 21);

// console.log(d);
// console.log(today);
// console.log(past);
// console.log(future);

// future.setFullYear(2023);
// console.log(future);

// console.log(d.getTime())

// console.log(new Date('2019-11-18T21:31:17.178Z',));

// const past = new Date(2022, 4, 14);
// const future = new Date(2022, 4, 27);

// console.log(past);
// console.log(future);

// const daysPassed = (day1, day2) => {
//     return Math.trunc(Math.abs(day2 - day1(1000 * 60 * 60 * 24)));
// }
// console.log(daysPassed(past, future));



// console.log('US: ', new Intl.DateTimeFormat('en-US').format(todayDate));

// console.log('brittain: ', new Intl.DateTimeFormat('en-GB').format(todayDate));

// console.log('Germany: ', new Intl.DateTimeFormat('en-DE').format(todayDate));

// console.log('Portugal: ', new Intl.DateTimeFormat('pt-PT').format(todayDate));

// console.log('Syria: ', new Intl.DateTimeFormat('ar-SY').format(todayDate));

// const number = 123456.789;

// const option = {
//     style: 'currency',
//     currency: 'USD'
// };


// console.log('brittain', new Intl.NumberFormat('en-GB', option).format(number));

// console.log('Germany', new Intl.NumberFormat('de-DE', option).format(number));

// console.log('Syria', new Intl.NumberFormat('ar-SY', option).format(number));

// console.log('portugal', new Intl.NumberFormat('pt-PT', option).format(number));

// const ingredients = ['Salad', 'Butter', 'fruits'];
// const foodTimer = setTimeout((...ings) => {
//     alert(`You ordered for chicken with ${ings}...! 🍖`)
// }, 5000, ingredients);
// if (ingredients.includes('bama')) clearTimeout(foodTimer);

// console.log('This is not required');



setInterval(() => {
    // console.log('Interval logs')
}, 2000);

const newVibe = (a, b) => {
    // console.log(`Watch for new songs, I have ${a} and ${b} for my fans`)
}
setInterval(newVibe, 3000, 'Buga', 'Finesse')












