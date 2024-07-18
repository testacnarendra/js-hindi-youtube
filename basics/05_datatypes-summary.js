// Premitive data types
// 7 types : String, Number, Boolean , null, undefined, Symbol , BigInt
// call by value 

const score = 100
const scoreValue = 100.3

// Reference type datatypes (Non Premitive)   
// Array, Objects, functions 
const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol(123)

// console.log(id === anotherId)

const bigNumber1 = 465454456465456456455  // int
const bigNumber = 465454456465456456455n  // bigint
console.log(typeof bigNumber)


const heros = ["shahrukh", "Salman"] // Array

let myObj = { // objects in curly braces
    name:"narendra",
    age:22,
}


const myFunction = function(){ //type is function object
    console.log("I am a function")
}


console.log(typeof myFunction)


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++Memory +++++++++++++++++++++

//Stack (Premitive)-> copy;
// milta he copy

// Heap(Non-premitive)-> referencce 


// Example of Premitive type data  --- we always get copy 
let myYoutubeName = "narendra"
let anotherName = myYoutubeName

anotherName = "Neeraj"

console.log(myYoutubeName) // narendra

console.log(anotherName) // Neeraj


// Example of Non-Premitive type data  --- we always get reference 


let user = {
    name:"narendra",
    place:"Indore",
    email:"test1@gmail.com"

}

let myuser = user

console.log(user.email) //test1@gmail.com

myuser.email = "test2@gmail.com"

console.log(user.email) //test2@gmail.com