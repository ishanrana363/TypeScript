// string number boolean void undefined null ;

let firstName: string;
let lastName: string;
let isActive: boolean;
let age: number;

firstName = "John";

lastName = " Doe";

isActive = true;

age = 30;

let userName =  firstName.concat(lastName).split("");

console.log(userName); 

console.log(`First Name: ${firstName} ${lastName} ${isActive} ${age}`);

// let id;

function add  () : void {
    console.log("add");
};


add();