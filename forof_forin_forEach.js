//for - of works only for arrays and strings
//picks last index value and assign to a var
/**
 * for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object (array, strings, )
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true


 */
console.log('using the for of loop array ');
const favSports = ['football', 'rugby', 'tennis', 'hockey', 'basketball', 'baseball'];
for (const forof of favSports) {
    console.log(forof);
}
//print even index values array
console.log('\nprint even index value using forof loop array');
let counter2 = 0;
for (const forof of favSports) {
    if (counter2 % 2 == 0) {
        console.log(forof)
    }
    counter2++;
}
//print odd index values array
console.log('\nprint odd index value using forof loop array');
let counter3 = 0;
for (const forof of favSports) {
    if (counter3 % 3 == 0) {
        console.log(forof)
    }
    counter3++;
}
//using the forof in a string
let myString = 'Hello world';
for (const char of myString) {
    console.log(`\n${char}`);
}
//forloop using charAt() get the same result
for (i = 0; i <= myString.length - 1; i++){
    console.log(`${myString.charAt(i)}`);
}
//for in loop - works only for objects 
console.log('using for in loop on an object');
let myObj = {

    myName: 'Felipe Ruiz',
    age: 58,
    state: 'New York',
    pastJobs: {
        current: 'unemployed',
        past1: 'QA Analyst',
        past2: 'IT Support'
    },
    siblingName: ['Lissette', 'Danilo', 'Gabby']
}
for (const obj in myObj) {
    console.log(`${obj} -- ${myObj[obj]}`);
}
//for each array or function 
console.log('for each array or function')
const fruits = ['mango', 'banana', 'apple', 'pineapple', 'cherry'];
fruits.forEach(i => console.log(i));
//use for_loop to traverse array 
console.log('use for_loop to traverse array');
const realSports = ['football', 'cricket', 'baseball', 'rugby', 'tennis'];
for (i = 0; i <= realSports.length - 1; i++){
    console.log(realSports[i]);
}
//use of for_of in array
console.log('use of for_of in array');
for (const sName of realSports) {
    console.log(sName);
}
//use of forEach in array 
console.log('use of forEach in array');
realSports.forEach(i => {
    console.log(realSports);
});