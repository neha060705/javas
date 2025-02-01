const name ="neha"
const repocount=50
//console.log(name + repocount + " value"); (less used)
console.log(`Hello my  name is ${name} and my repocount is ${repocount}`) //(much better way )
const gameName = new String('HelloWorld')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherstring = gameName.slice(-8,4);
console.log(anotherstring);
const newstringone = "   neha"
console.log(newstringone);
console.log(newstringone.trim());