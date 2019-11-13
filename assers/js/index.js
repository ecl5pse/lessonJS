"use strict";

/*

let i = 0;

console.group("WHILE")
while (i++ < userNumber){

    console.log("хо-хо-хо" + i);
    i++;

}
console.log(i);
console.log("DEAD");
*/

/*

let t = 0;

for(let i = 0; i< 10 ; i++ ,t++)
{
    console.log("хо-хо-хо" + " " + i);

}

console.log("DEAD");
*/

/*

let i = 0;






do{
    console.log("do while");

}while (i++ < 10);


console.log("dead")
*/

/*

let x = 1;
let y = 11;

x = (y++ , x+=y );


console.log("X = " + x);
console.log("Y= " + y);
*/






/*

const userBase = prompt("Please input your base number");
const  userExponet = prompt("Please input your exponet number ")


alert(pow(userBase , userExponet));



function  pow (base , exponet) {

    base = +base;
    exponet = +exponet;

    if(Number.isNaN(base) || Number.isNaN(exponet)){

        return;

    } else {

        if (exponet === 0 || exponet === "0") {
             return 1;
        }

        let result = base
        let isExponentNegative = false;

        if (exponet < 0){
            exponet = -exponet;
            isExponentNegative= true;
        }
            for (let i = 1; i < exponet; i++){

                result = base * exponet;

            }

            return isExponentNegative ? 1 / result : result;
    }
}*/




/*  Первое задание

const userNumberS = prompt("Please input your number synbol");


let i = 0 ;

while( i++ < userNumberS ){

    console.log("#");
}



*/

/*

let userNumber = prompt("Please input your number");

let i = 0;



        if (userNumber>=0){
            console.log(-userNumber);
        }






*/


/*


const firstValue = prompt("First value):
    const secondValue = prompt("Second value");

const  minValue = firstValue > secondValue ? secondValue : firstValue ;

let i = 0;

while (i++ <= minValue){
    if ( firstValue % i === 0 && secondValue & i === 0);{
        console.log(i);

    }
}

*/





/*

const userNumberValue = prompt("Please input your number");
const userExponentValue = prompt("Please input your exponent");
let userNumber = Number(userNumberValue);
let userExponen = Number(userExponentValue);

    let  i = 1

while (i++< userExponen ){

        userNumber*=userExponen;

}
console.log(userNumber);

*/

/*const userNumberValueOne = prompt("Please input your number one");
const userNumberValueTwo  = prompt("Please input your  number two");
let userNumberOne = Number(userNumberValueOne);
let userNumberTwo = Number(userNumberValueTwo);


const min = userNumberOne > userNumberTwo  ? userNumberTwo : userNumberOne;


let  i = 0;

while (i++ <= min){


    if(userNumberOne % 1 === 0 && userNumberTwo % 1 === 0){
        console.log(i);
    }
}*/

/*

const  userValue = prompt("Input youte value")
const  userNumber = Number(userValue);

    if(userNumber == 0 ){
    console.log(1);

    break;
    }


 let i = 1;
 let resul = 1;

 while (i++ < userNumber){
     resul * = 1
 }

console.log(resul);


*/

/*


const firstValue = prompt("First value):
    const secondValue = prompt("Second value");

const  minValue = firstValue > secondValue ? secondValue : firstValue ;

let i = 0;

while (i++ <= minValue){
    if ( firstValue % i === 0 && secondValue & i === 0);{
        console.log(i);

    }
}

*/



/*

let value = prompt("How much will 2 + 2 * 2 = ");
let number = Number(value);

let  i = 1;



 if ( number < 0 ) {
     console.log("no")

 }else {

     do {
         if (number == 0) {
             console.log("no");

         } else if (number == 8) {
             console.log('good')

         }


     } while ( number <5)

     let value = prompt("How much will 2 + 2 * 2 = ");
 }



*/


/*
const value = prompt("inpunt number");
const number = Number(value);



for ( let i = 0; i<100 ; i++){

      if (number % 1 === 0) {

          console .log( i + number);
      }

}

*/


const valueMin = prompt("inpunt number");
const valueMax = prompt("inpunt number");
let  numberMin = Number(valueMin);
let numberMax = Number(valueMax);


for (let i = numberMin;i<numberMax; i+=
    {
        console.log(i);
}



















function pow(base , exponet) {

    if (exponet === 1 ){
        return base;
    }
    return  pow(base, exponet - 1)* base;
}


function facterial(number) {
    if (number === 1){
        return 1;
    }
    return facterial(number - 1) * number;
}


console.log(pow(5, 2));
console.log(facterial(170));














