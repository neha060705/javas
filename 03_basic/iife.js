(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);

})() ; //global scope ke pollution se bachne ke liye 
//colan is used  so that function can be run without error we can run two iife at a time

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);

// })()


((name)=>{
    console.log(`DB CONNECTED TWO`);

})('neha')


