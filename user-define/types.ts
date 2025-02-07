




type User = {userName:string,id:number};
let users : User[];

users = [];

let user1 : User;

user1 = {userName:"Ishan",id:2}
let user2 : User;
user2 = {userName:"abc",id:3}


users.push(user1);

users.push(user2)


console.log(users);


type requestType = "GET" | "Delete";

let method : requestType;
method = "GET";
console.log(method)

function myFun(request:requestType){
    console.log(request)
};

myFun("GET");