/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hoisting
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Most importantly, you should always remember that the JavaScript declares the
// variable first in the background. Then, initializing them. Thus, it is also
// good to know that the processing of variable declarations takes place before
// the execution of any code. However, until the execution of code assigning them
// takes place the undeclared variables do not exist in JavaScript.
//
// Therefore, when the assignment is executed, a value assigned to an undeclared
// variable implicitly creates it as a global variable. This specifies that all
// undeclared variables are global variables.

/* function Hoisting() {
   x = 100;
   let y = 200;
}
Hoisting();
console.log(x); // 100
console.log(y); // Reference Error: y is not defined */



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Difference between invoking eval directly and by any other name
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is an example from the book 'JavaScript: The Definitive Guide (7th Edition)',
// page 90 with one additional fix in the first line (see comments)

const geval = (string) => {eval(string)}; // Using another name does a global eval (fixed the original line from the example which was: const geval = eval;)
let x = "global", y = "global";           // Two global variables

function f() {                // This function does a local eval
    let x = "local";          // Define a local variable
    eval("x += 'changed';");  // Direct eval sets local variable
    return x;                 // Return changed local variable
}
function g() {                // This function does a global eval
    let y = "local";          // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y;                 // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":