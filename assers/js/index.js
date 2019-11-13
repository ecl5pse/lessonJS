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


let userNumber = prompt("Please input your number");

let i = 0;



        if (userNumber>=0){
            console.log(-userNumber);
        }








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



















