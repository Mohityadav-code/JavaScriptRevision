console.log("Hello world");
let a= 34;
changethecontent=()=>{
    document.querySelector("h1").innerHTML=a
    
}
// Variables

// types of data types
// numbers
// Objects
// boolean - True And False 
// Undefined 
// Null 
// String 

// Functions 

function hello(){
    console.log("Hey Mohit it's all right it's ok ");
}
hello()

// Objects

let obj={
    a:"mohit",
    b:34,
    c:"Hello",
  d:  function hello(number){
      console.log("hello world");
      return (`numbher is ${number}`);
    },
    e:"this is written after clicking on me"
}
console.log(obj.c+ " "+ obj.a);
(obj.d(45))
console.log('(obj.d(45));: ', (obj.d(45)));


// EventListner 
// document will work on whole screen
let button=document.querySelector("button")


button.addEventListener("click", alertit=()=>{let conf=confirm("are you sure")
if(conf) document.querySelector("h1").innerHTML=a
    window.alert("This is got alerted after click on button")})

// Array 
let arr=[45,66,33,88];
// iterating through array
arr.forEach(element => {
    console.log(element);
});
// Array Methods
// array map
// array reverse

// string methods substring and all

// Arrow function

var important= "we can use arrow function to get global this into function"
let arr2=[2,4,5,6]
let myfunction=(number)=>{console.log(this);}