let userId : string | number | boolean

userId = "123456";

userId = 123456;

userId = true;

console.log(`User ID: ${userId}`);


function myFun (userName: string| number){
    console.log(userName);
};

myFun("ishan rana");

myFun(123);