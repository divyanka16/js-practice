console.log("Hello from 01_basics!");


// Topic - 1, ---- VARIABLES ----

// variables is just like storing a data in a container, that's called variables.
// three types of variables:- const, let, var.
// var:- It's a old way and didn't advised to use more.
// const:- It's for values that don't change or reassignable.
// let:- modern way, can be changed but not reassignable.

var namee = "john doe";
let email = "john@google.com";
const password = "1234";

gender = "male"; // you can store values like this too but it's not a good practice or suggested.

// console.table([namee, email, password, gender]);



//   Topic-2,    ---- DataTypes ----
/*

       Datatypes tell you about value's type, which kind of value a variable has.

       Basically there are two types of datatypes, 
           Primitive Datatypes & Non-Primitive Datatypes.

    1. Primitive Datatypes:- -> These are simple, singal values. 
                             -> Cannot be muteable directly.
                             -> Copied by value(a new copy is made when reassigned).
                             -> Managed automaticaly.
                             EX: number,string,boolean,undefined,null,bigInt,symbol..
    
    2. Non-Primitive Datatypes: -> These are complex datatypes that can hold multiple values, 
                                    and collection of data.
                                -> They are objects and mutable(can be changed directly.)
                                -> They are copied by references not by values.
                                -> Managed by Garbage Collector.
                                EX: objects,arrays,functions...
*/



//  Topic-3, ---- Heap & Stack ----

/*

JavaScript uses two main areas for memory:

    | Memory Area | Stores                  | Used For                                |
    | ----------- | ----------------------- | -------------------------------------   |
    | **Stack**   | Simple, fixed-size data | Primitive data types & function calls   |
    | **Heap**    | Complex, dynamic data   | Objects,arrays,functions, etc.(non-pri) |
                                            
    Heap => The stack is like a pile of boxes — each box holds simple data (numbers, strings,
             booleans,etc.).
         
         => fast access.
    
    Stack => The heap is a large, flexible area of memory for storing objects and reference data.
          
          => slower access.

*/


/*

Topic - 4, ---- String,Number and some of methods ----
1. literal values `${something}` 
.*/

// let nameee = "john";
// let age = "21";

// console.log(`Hello ${nameee} you're ${age} year old.`);

let word = new String("beautiful");

// console.log(word);
// console.log(word[2]);
// console.log(word.__proto__);

/*
you can access all the prototype methods after . but in browser.
*/

//  --- NUMBER --- 
const cash = 1000000;
// console.log(cash.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.round(4.4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(8,3,75,30,)); // 3
// console.log(Math.max(8,3,75,30,)); // 75


//  ------------- RANDOM ------------------

// console.log(Math.random()); // 0.3153220287784675
    // the value in random is always in between 0-1.

// console.log(Math.random()*10) //3.153220287784675 , 0.2716093396670183
    // its just multiply the output with 10 (decimal shifts by 1).

// console.log(Math.floor((Math.random()*10) + 1));
    // we use floor here to avoid answer in decimal.
    // output is not less than 1 because we added 1

const min = 10;
const max = 20;

// if there's situation where min & max digits are given and you want a random number between them then this is the formula that's works always.

console.log(Math.floor(Math.random() * ( max-min + 1) + min));
