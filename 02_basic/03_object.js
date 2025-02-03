//singleton

//object create

//object literals
 const JsUser ={
name:"Neha",
 age:18,
 location:"gaziabad",
email:"msneha@gmail.com",
 isLoggedIn:false,
lastLoginDays:["Monday","saturday"]
 }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// JsUser.email="neha@gmail.com"
// Object.freeze(JsUser)
// JsUser.email="nehayadav@gmail.com"
// console.log(JsUser.email);
JsUser.greeting =function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());
JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
