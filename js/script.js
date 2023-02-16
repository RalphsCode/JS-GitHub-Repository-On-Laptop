// STEP 1
/*
let some_month              to camel case: let someMonth    
function the Month()        to camel case: let theMonth  
let current-month           to camel case: let currentMonth  
let summer_month            to camel case: let summerMonth  
let MyLibrary-function      to camel case: let myLibraryFunction  
*/

// STEP 2
/* 
Give me an example of a numeric literal expression, a string literal expression, 
a Boolean literal expression, and a null literal expression.


let someThing = -123                    // numeric literal expression
let employeeFirstName = 'Johanna'       // string literal expression
if employeeTerminated = false           // string literal expression
employees.payraise() = null             // null literal expression
*/ 

// STEP 3
/*
Give me two examples of complex / variable expressions.
*/

salaryRaiseMultiplier = (43 * 10) - 429.9                                           // Example 1
let employeePay = currentSalary * salaryRaiseMultiplier - (taxWitholding * 1.2)     // Example 2


// STEP 4
/*
Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
Use Camel Casing and Hungarian Notation when naming your identifiers.
*/

var firstName = ''              // 1
var lastName = ''               // 2
var streetAddress = ''          // 3
var StrAaddressCity = ''        // 4
var StrAddressState = ''        // 5
var iZipCode = ''               // 6
var fAge = ''                   // 7
var listRefSource = ''          // 8
var bMayWeContact = ''          // 9


// STEP 5
/*
Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
*/

firstName = prompt("What is your first name?")
let fAge = 28
const iZipCode = 92106


// STEP 6
/*
Create a variable.
Add a number and a string and display the coerced result in the browser’s console window.
*/

let mashUp = 'Today is Thursday' + 10                               // Add a number and a string
console.log('Output: ', mashUp, ' Class: ', typeof(mashUp));        // Print the value of the mash up and its class


// STEP 7
/*
Create two variables.
For the first variable, add a Boolean and a string and display the coerced result.
For the second variable, add a number and a Boolean and display the coerced result.
*/

var a = Boolean(10)                                 // a Boolean (True)
let b = 'Thursday'                                  // a String
let c = a + b                                       // Variable c is the sum of the Boolean plus the String Thursday
console.log('Output: ', c, ' Class: ', typeof(c));  // Print the value of c and its class

var x = 10                                          // a number
let y = Boolean(0)                                  // a Boolean (False)
let z = x + y                                       // Variable z is the sum of the number 10 plus the Boolean False
console.log('Output: ', z, ' Class: ', typeof(z));  // Print the value of z and its class

// STEP 8
/*

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
console.log(someString)

That is going to throw an error, need to put a \ before the apostrophie in I'm
Like this:  and I\'m not sure
*/

// STEP 9
/*

Create a variable that produces a null value in the console window.
Then, create a variable that produces an undefined value in the console window.
*/

let notHere = '';
var unknown;
console.log('Null shows here: ' + notHere + '.') 
console.log('Undefined shows here: ' + unknown + '.')

// STEP 10
/*
Use the unary typeof operator on various literals to return the following types 
within the console window: string, number, Boolean, object, and undefined.
*/

console.log(typeof 'COMP 690');                 // Output: "string"
console.log(typeof 700);                        // Output: "number"
console.log(typeof true);                       // Output: "boolean"
console.log(typeof [1, 2, 4]);                  // Output: "object"
console.log(typeof undeclaredVariable);         // Output: "undefined"

// STEP 11
/*
Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
Hello Zak Ruvalcaba, welcome to the JavaScript class!
Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation 
operators to construct this string of text. 
One after the text “Hello” and a second one after your name and before the comma.
*/

userName = 'Ralph Godkin'
window.alert('Hello ' + userName + ', welcome to the JavaScript class!')

// STEP 12
/*
Declare a variable called name and set it equal to your name.
Substitute your name in the previous alert string with the variable instead.
*/

oneName = 'Ralph Godkin'
window.alert('Hello ' + oneName + ', welcome to the JavaScript class!')

// STEP 13
/*
Declare a variable called course and set it equal to “JavaScript”.
Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
*/ 

course = 'JavaScript'
document.write ('Hello ' + OneName + ', welcome to the ' + course + ' class!')

// STEP 14
/*
Rework the above string so that a line break is added right before the word “Welcome”. 
*/

document.write ('Hello ' + oneName + ', welcome \n to the ' + course + ' class!')

// STEP 15
/*
Replace the hardcoded string of your name with a prompt that asks the user for their name. 
The prompt’s response will now be captured in the name variable.
*/

oneName = prompt('Please enter your name:')

// STEP 16
/*
Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. 
The prompt’s response will now be captured in the course variable.
*/

course = prompt('What class are you taking?')

// STEP 17
/*
Declare a variable called x and assign it a value of 10.
Declare a variable called y and assign it a value of 20.
Display the sum of those two numbers in the console window.
*/

let x = 10, y = 20
console.log(x + y)

// STEP 18
/*
Declare a variable called x and assign it a value of 20.
Add and assign 20 to that variable and display the result in the console window.
The result should be 40.
*/

let x = 20
let x = x + 20
console.log(x)

// STEP 19
/*
Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.
The result should be 100.
*/

let x = 20
let x = x * 5
console.log(x)

// STEP 20
/*
Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
Divide and assign 1 to that variable and display the result in the console window.
The result should be 2. 
*/

let x = 20 % 3              // Variable x is the modulus of 20 / 3
x = x + 1                   // Add 1 to the modulus
console.log(x)              // Show the result

// STEP 21
/*
Using a set of Comparison and Logical operators, write an application that evaluates to true 
and displays the result within the console window.
*/

let location = 'San Diego'                          // Assign variable location to San Diego
if (location === "San Diego")                       
{
    console.log('Location is San Diego.')           // If the location is San Diego, write it in the console
}
else
{
    console.log('Location is not San Diego.')       // If location is not San Diego, write it in the console
};

// STEP 22
/*
Using a set of Comparison and Logical operators, write an application that evaluates to false and displays 
the result within the console window. 
The application cannot use the same operators used in the previous application.
*/

var userState = 'CA'                        // Assign variable userState to CA
if (userState != "CA")
{
    console.log('Not California.')          // If the userState is not CA, write Not California.
}
else
{console.log('Location is in California.')  // If the userState is CA, write Location is in California.
};

// ==================
// END OF ASSIGNMENT
// ==================