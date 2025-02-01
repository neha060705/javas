//stack (primitive)
// heap(non-premitive)
let myname="neha yadav"
let anotherName = myname
anotherName="priya"
console.log(myname)
console.log(anotherName)


let userone={
    email:"neha45563@google.com",
    upi: "user@ybl"
}

let usertwo =userone
usertwo.email="adya3453@gmail.com"
console.log(userone.email);
console.log(usertwo.email);

//because they have same reference so change in one will change the the other also 


