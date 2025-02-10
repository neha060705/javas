function one(){
    const username="neha"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if (true){
    const username="neha"
    if(username=="neha"){
        const website ="youtube"
        console.log(username+website);

    }

    //console.log(website);(error because we are calling outside the loop)

}
//console.log(username);
//same error 


//++++++++++++++interesting++++++++++


function addone(num){ //function 
    return num +1
}
addone(5)
const addTwo =function (num){//function or expression
    return num+2
}
addTwo(5)