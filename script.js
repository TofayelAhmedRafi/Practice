// // for ( let i = 10; i > 0; i--) {
// //     console.log(i);
// // }

// // for (let i = 1; i <= 100; i++) {
// //     if ( i % 2 == 0) {
// //         console.log('Even');
// //     }else{
// //         console.log('Odd');
// //     }
// // }


// // let age = Number(prompt('Enter Your Age'));

// //     if (age >= 18) {
// //         alert('Welcome To Our Shop')
// //     } else {
// //         alert ('Try After' +' ' + (18 - age)+ ' ' + 'Years');
      
// // }

// /* while loop looks like infinite loops*/

// let pin = Number(prompt('Enter Your 4 Digit PIN'));
// while (pin !== 2948) {
//     pin = Number(prompt('You have entered the wrong PIN number. Please enter the correct PIN number.Enter Your 4 Digit PIN'));
// }

// if(pin === 2948) {
//     alert('Thank you for your confirmation, Please press ok to continue');
// }

// /* Functions */
// function add(a, b){
//     let result = (a + b);
//     console.log(result);
// }

// add('Tofayel', 'Ahmed');


// /* Functions */
// function del(a, b){
//     let result = (a - b);
//     console.log(result);
// }

// del(3, 5);

// /* Functions */
// function mul(a, b){
//     let result = (a * b);
//     console.log(result);
// }

// mul(3, 5);

// function divi(a, b){
//     let result = (a / b);
//     console.log(result);
// }

// divi(3, 5);

/** return keywords */

function add(a, b) {
    let result = (a+b);
    return result;
}

    console.log(add(13, 25));
    