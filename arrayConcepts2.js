/**
 * Felipe Ruiz
 * review arrays 
 */
let planets = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
console.log(`\nplanets - ${planets}`);
//length() -  of array
let length_planets = planets.length;
console.log(`\nplanets length of array - ${length_planets}`);
//access index[] - of array & assign value to index of array
const valueAtindex4 = planets[4];
console.log(`\nplanet at index 4 : ${valueAtindex4}`)
//string() - convert array values into comma separated strng values
const planets_strg = planets.toString();
console.log(`\nplanetstring - ${planets_strg}`)
//join() - user define separator 
const planets_join = planets.join('');//console out - single string with all planets without space in between them
console.log(`\nplanetsjoin - ${planets_join}`)
const planets_join1 = planets.join(' ');//console out - planets with space in between them 
console.log(`\nplanetsjoin - ${planets_join1}`)
const planets_join2 = planets.join();////console out - each planet separated by a comma
console.log(`\nplanetsjoin - ${planets_join2}`)
//remove pop(last_value) shift(first_value) to array
const planets_pop = planets.pop();
console.log(`\nplanets_pop last_value - ${planets_pop}`);
const planets_shift = planets.shift();
console.log(`\nplanets_shift first_value - ${planets_shift}`)
//add push(add_value_end) returns array length
const planets_push = planets.push('Sun');
console.log(`\nplanets_push - ${planets_push}`)
console.log(`\narray after push - ${planets}`)
//- unshift(add_value_in-front) returns array length
const planets_unshift = planets.unshift('NASA');
console.log(`\nplanets_unshift - ${planets_unshift}`)
console.log(`\narray after unshift - ${planets} `)
//splice() arg1:index where to add - arg2:how many values to remove - arg3:new value
const planets_splice = planets.splice(2, 0, 'We do not have the technology');
console.log(`\nplanets_splice - ${planets_splice}`)
console.log(`\narray after splice - ${planets}`);
//delete() use splice() instead
const planets_splice1 = planets.splice(5, 1, 'deleted');
console.log(`\nplanets_splice_delete - ${planets_splice1}`);
console.log(`\narray after splice as delete - ${planets}`)
//concat()multiple arrays 
let fruits = ['Mango', 'Apple', 'Banana', 'Cherry', 'Grape', 'Peach', 'Orange'];
let states = ['NY', 'NJ', 'PA', 'LA', 'CA', 'MA', 'VA'];
const combineArray = fruits.concat(states);
console.log(`\n combine array concat() - ${combineArray}`);
console.log(`\n fruits - ${fruits}`);
console.log(`\n states - ${states}`);
//include() arg1:value to check arg2:search index at return true otherwise false
const include_pluto = planets.includes('Pluto');//return false
console.log(`\ninclude pluto - ${include_pluto}`);
console.log(`\nplanets array - ${planets}`);
//include() - add to the array
const include_pluto1 = planets.includes('pluto', 0);//return false
console.log(`\ninclude pluto add - ${include_pluto1}`);
console.log(`\nplanets array - ${planets}`);
//FIRST OCCURENCE - indexof() return the value at index otherwise returns -1 
let planets_fo = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const indexOf_Earth = planets_fo.indexOf('EARth');
console.log(`\n index_Earth - ${indexOf_Earth}`);
console.log(`\n planets array - ${planets_fo}`)
//LAST OCCURENCE - lastindexof() return the value at index otherwise returns -1 
let planets_lo = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const lastIndexof_Earth = planets_lo.lastIndexOf('earth');
console.log(`\n lastindex_Earth - ${lastIndexof_Earth}`);
console.log(`\n planets array - ${planets_lo}`);
//to be array or not to be array - isArray() - checks value/var is array or not -Array.isArray
let planets_loA = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const isPlanets_loA = Array.isArray(planets_loA);
console.log(`\n planets_loA is an Array - ${isPlanets_loA}`);
//last index of pluto is an array
let isLastIndexof_plutoArray = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let isLastIndexof_plutoArray1 = Array.isArray(isLastIndexof_plutoArray);
console.log(`\nisLastIndexof_plutoArray - ${isLastIndexof_plutoArray1}`);
//fill - array w specific value - similar to replace for strings - arg1 new value arg2 starting index arg3 end index - add value endindex not included
let fruits_array = ['mango', 'apricot', 'banana', 'cherry', 'pineapple'];
console.log(`\nprint the fruits_array - ${fruits_array}`);
let fruits_array_fillNoendindex = fruits_array.fill('tomato', 3, );
console.log(`\n fruits_array_fill_Noendindex - ${fruits_array_fillNoendindex}`);
let fruits_array_fillendindex = fruits_array.fill('blueberry', 3, 4 );
console.log(`\n fruits_array_fill_endindex - ${fruits_array_fillendindex}`);
//reverse() changes original array 
let vegetable = ['lettuce', 'tomato', 'onion', 'broccoli'];
console.log(`\n original vegetable array - ${vegetable}`);
let rev_veg = vegetable.reverse();
//reverse passing no parameters
console.log(`\nreverse passing reverse(no parameters)- ${rev_veg}`);
