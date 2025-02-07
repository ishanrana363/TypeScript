// let person = {name:"ishan",age:21};
// console.log(person);

// let users : {name:string,age:number};
// users = {
//     name:"Mahtuba",age:21
// };
// console.log(users)


let users : object[];

users = [];


let user1 : {userName:string,age:number};
user1 = {
    userName:"ishan",
    age : 21
}
let user12 : {userName:string,age:number};
user12 = {
    userName:"Mahtuba",
    age : 21
}

users.push(user1);
users.push(user12)

console.log(users)


