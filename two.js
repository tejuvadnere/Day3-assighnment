// Question 2:
// Write a program which will take OS name and version from the user separated by a space. Then
// log the OS name and version on the console.
// Input: "Android 9"
// Output: The OS name is Android and version is 9


console.log("Answer 2");


let user_input = String(prompt(`Enter OS name and version separated by a space.`));
let user_input_array = user_input.split(" ");
console.log(`The OS name is '${user_input_array[0]}' and version is '${user_input_array[1]}'.`);