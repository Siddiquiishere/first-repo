// Step 18
// ARRAYS
// In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an array.
// An array is a non-primitive data type that can hold a series of values. Non-primitive data types differ from primitive data types in that they can hold more complex data. Primitive data types like strings and numbers can only hold one value at a time.
// Arrays are denoted using square brackets ([]). Here is an example of a variable with the value of an empty array:
// Example Code
// let array = [];
// Question
// Declare a rows variable and assign it an empty array.

// let rows = [];

// ----------------------------

// Step 19
// When an array holds values, or elements, those values are separated by commas. Here is an array that holds two strings:
// Example Code
// let array = ["first", "second"];
// Change your rows declaration to be an array with the strings "Naomi", "Quincy", and "CamperChan". The order of values in an array is important, so follow that order. Remember that strings are case-sensitive.
// let rows = ["Naomi", "Quincy", "CamperChan"];

// -----------------------------------------------

// Step 21
// Arrays are special in that they are considered mutable. This means you can change the value at an index directly.
// For example, this code would assign the number 25 to the second element in the array:

// Example Code
// let array = [1, 2, 3];
// array[1] = 25;
// console.log(array); // prints [1, 25, 3]
// Update the third element of your rows array to be the number 10. Then print the rows array to your console.


// rows = [1,2,3];
// rows[2] = 10
// console.log(rows)

// -----------------------------------------------

// Step 22
// Notice how the value inside your rows array has been changed directly? This is called mutation. As you learn more about arrays, you will learn when to mutate an array, and when you should not.
// Before moving on, this is a great opportunity to learn a common array use. Currently, your code accesses the last element in the array with rows[2]. But you may not know how many elements are in an array when you want the last one.
// You can make use of the .length property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:
// Example Code
// array[array.length - 1]
// array.length returns the number of elements in the array. By subtracting 1, you get the index of the last element in the array. You can apply this same concept to your rows array.
// Update your rows[2] to dynamically access the last element in the rows array. Refer to the example above to help you.
// You should not see anything change in your console.

// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0]);
// rows[2] = 10;
// rows[rows.length-1]
// console.log(rows)

// ------------------------------------------


// Step 24
// In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.
// Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console.
// After logging, change the last element of cities to the string "Mexico City", then log the cities variable again.
// When done correctly, you should see this output in the console.

// let cities = ["London", "New York", "Mumbai"];
// console.log(cities)
// cities[cities[2]="Mexico City"];
// console.log(cities)
// -----------------------------------------------

// Step 26
// A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.
// Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:
// Example Code
// array.push(12);
// Use .push() to add the string "freeCodeCamp" to the end of your rows array. Add this code before your console.log so you can see the change you made to your array.

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp")

// console.log(rows);

// -----------------------------------------------

// Step 27
// Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.
// When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.
// Create a new variable called popped and assign it the result of rows.pop(). Then, log popped to the console.

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");

// let popped =rows.pop()
// console.log(popped);

// -----------------------------------------------------------

// Step 29
// Were you expecting to see 4 in the console? .push() returns the new length of the array, after adding the value you give it.

// It is important to be aware of what values a method returns. Take some time to experiment with .push() and .pop(). When you are ready, remove all of your .push() and .pop() calls, and your console.log statements.

// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);
// let popped = rows.pop();
// console.log(popped);
// console.log(rows);

// -------------------------------------------------------------


// Step 33
// To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.
// You are going to start with a basic for loop. for loops use the following syntax:
// for (iterator; condition; iteration) {
//   logic;
// }
// Step 34
// Your loop now needs a proper iterator. The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

// It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). For example, here is a for loop that declares an index variable and assigns it the value 100.
// for (let i = 0; "condition"; "iteration") {

// }

// =========================================================

// Step 35
// The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

// In JavaScript, a Boolean value can be either true or false. These are not strings - you will learn more about the difference later on.

// For now, you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right. For example, count < 3 would evaluate to true if count is 2, and false if count is 4.

// Replace your "condition" string with a condition to check if i is less than count.

// -------------------------------------------------------------------

// Step 36
// Your iteration statement will tell your loop what to do with the iterator after each run.

// When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, bees = bees + 3 would increase the value of bees by three.

// Use that syntax to replace your "iteration" string with a reassignment statement that increases i by one.

// for (let i = 0; i < count; i = i+1) {

// }
// --------------------------------------------------------------------

// Step 37
// Your loop should now run eight times. Inside the body of the loop, print the value of the i iterator and see what happens.


// for (let i = 0; i < count; i = i + 1) {
//     console.log(i)
//     }

// -------------------------------------------------------------

// Step 38
// You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.

// Replace your log statement with a statement to push i to your rows array.

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i)
//   }

// ---------------------------------------------------------------------


// Step 42
// Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

// You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

// In your for...of loop, use the addition operator to concatenate the row value to the result value.


// for (const row of rows) {
//     result = row + result
//    }


// -----------------------------------------------------------

// Step 44
// Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

// Instead of pushing i to the array, push the value of your character variable.

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character);
//   }


// -------------------------------------------------------------------
// Step 45
// Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

// To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":
// const activity = "Code! ";
// activity.repeat(3);




// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i));
//   }


// Step 55
// Before moving on, take a moment to review how functions work.

// Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

// Your function should not use hard-coded values. An example of a hard-coded function might be:

// function sayName(firstName, lastName) {
//     return "John Doe";
//   }
  
//   sayName("Camper", "Cat");

//   This function would return "John Doe" regardless of the arguments passed to the parameters firstName, and lastName, so "John Doe" is considered a hard-coded value.

// Declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

// function addTwoNumbers(a,b){
//     return a+b
//   }
//   const sum = addTwoNumbers(5,10)
//   console.log(sum)



// ------------------------------------------------------------

// Step 57
// Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

// The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

// When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global title variable:
// const title = "Professor ";
// function demo(name) {
//   return title + name;
// }
// demo("Naomi")

// This example would return "Professor Naomi". Update your padRow function to return the value of concatenating your character variable to the beginning of the name parameter.

// function padRow(name) {
//     return character+name
//   }


// Step 59
// Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.

// function getName() {
//     const name = "Camper cat";
//     return name;
//   }
  
//   console.log(getName()); // "Camper cat"
  
//   const capturedReturnValue = getName();
//   console.log(capturedReturnValue); // "Camper cat"
  
//   console.log(name); // reference error

//   To use your "Testing" value, return it out of the padRow function by updating your return statement to return only the test variable.

//   function padRow(name) {
//     const test = "Testing";  
//     return test;
//   }