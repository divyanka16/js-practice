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

console.table([namee, email, password, gender]);



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