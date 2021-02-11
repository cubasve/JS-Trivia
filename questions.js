//NOTE: Questions 1-7 are word answers - no coding required

const accounts = [
    {acctNo: 123, type: 'Checking', balance: 150},
    {acctNo: 234, type: 'Checking', balance: 200},
    {acctNo: 345, type: 'Savings', balance: 550},
    {acctNo: 456, type: 'Checking', balance: 550},
    {acctNo: 567, type: 'Savings', balance: 1500}
]

//1. Create a new array containing the _account_ objects that have a balance greater than a certain amount
/* .filter() --> select certain elements from a source array */

//2. Access the _account_ object having an 'acctNo' equal to a certain number
/* .find() --> find an element within an array */

//3. Check if there are any accounts with a negative balance
/* .some() --> check if array has at least 1 element that meets a certain condition */
/* .filter() --> select certain elements from a source array */

//4. Console.log all of the accounts
/* .forEach() --> iterate through all the elements in an array */

//5. Create a new array containing a string (such as "Account 123 has a balance of $150") for each of the accounts objects
/* .map() --> create a new array from a source array, usually transforming its values */
/* .forEach() --> iterate through each element of the array */

//6. Compute the sum of the balances for _accounts_ of 'type' equal to 'Savings'
/* .reduce() --> reduce an array into a single value - NOTE: "Single value" can be a single object, array - anything */

//7. Check if all of the _accounts_ have a balance greater than a certain number
/* .every() --> check if every element in array meets a certain condition */

//8. Does the following code work properly? Will this return true or false?
/* true */
function isPalindrome(str) {
    var reverseText = str.split('').reverse().join('');
    return str == reverseText;
}
isPalindrome('hannah');

//9. We have a timer function that returns a Promise that resolves after a random amount of time.
//We use Promise.all to resolve an array of timers. 
//What gets logged? Do we know or is it random?
const timer = a => {
    return new Promise(res =>
      setTimeout(() => {
        res(a);
      }, Math.random() * 100)
    );
  };
  const all = Promise.all([
    timer('first'),
    timer('second')
  ]).then(data => console.log(data)); /* ['first', 'second'] */

  //10.What is returned from console.log?
  let dog = {
      breed: "Border Collie",
      sound: "Wooh",
      getBreed: () => {
          return this.breed;
      },
      getSound: function() {
          return this.sound;
      }
  }
  console.log(dog.getBreed(), dog.getSound()); /* undefined, "Wooh" */
  /* 
  EXPLANATION:
  Arrow function: value of this is not bound to the dog - it's bound to the window
  */

//11. When running JavaScript in the browser, what gets logged when we try to call myFunction()?
//myFunction, Window, or undefined?
function myFunction() {
    console.log(this); /* Window */
}
myFunction();
/*
EXPLANATION:
- this = Window --> when using a function, and not an object or class
- this = myFunction --> if the function is a class or object
- this = undefined --> when 'strict' mode is used
*/

//12. In what order will the numbers 1-4 be logged to the console when the code below is executed?
(function() {
    console.log(1);
    setTimeout(function() {
      console.log(2);
    }, 1000);
    setTimeout(function() {
      console.log(3);
    }, 0); //will wait until call stack is cleared
    console.log(4);
})();
/* 1, 4, 3, 2 */
/*
EXPLANATION:
- 1 & 4 are synchronous so they get logged one after the other
- 2 & 3 are asynchronous so they get logged after their set time
NOTE: Even though 3 is told to wait 0 seconds, it has to wait until the call stack is cleared before it is executed
*/

//13. What is the return of console.log?
const n = 5;
console.log(1..n); /* undefined */
/*
EXPLANATION:
1. = is a valid number
second dot: assumes you are using dot notation to access a property of the number you just created
*/

//14. What gets logged when we test the following equality scenarios?
const a = c => c;
const b = c => c;
console.log(a == b); /* false */
console.log(a(7) === b(7)); /* true */
/*
EXPLANANTION:
*/

//15. Let's display some notifications to our user! What gets logged in the snippet?
const notifications = 1;
console.log(`You have ${notifications} notification${notifications !== 1 && 's'}`);
/* You have 1 notificationfalse */
/*
EXPLANATION:
 */

//16. Given an array of fruits, after slice method is applied, what will the result be?
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus); //[Orange, Lemon]
/*
EXPLANATION:
Slice method starts from 1 and UP TO 3 (NOT INCLUDING)
*/

