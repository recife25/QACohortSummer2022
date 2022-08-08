//syntax for if and else block - using localeCompare()
let countryName = 'Canada';
let countryNameLowerCase = countryName.toLowerCase();
let toExpectedCountryName = 'United state of america'.toLowerCase();
if (countryNameLowerCase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
}
else {
    console.log('You are not a USA Citizen');
}
//syntax for if else if else block using logical operators && || != !== 
console.log('Before if-else block');
// var dayName = 'Mon';
// var dayName = 'Tue';
// var dayName = 'Wed';
// var dayName = 'Thu';
// var dayName = 'Fri';
 var dayName = 'Sat';
// var dayName = 'Sun';
var isMeeting = true; //or false depending on condition

if ((dayName === 'Mon' || dayName === 'Thu') && !isMeeting) {
    console.log('I can work from home today');
}
else if (dayName === 'true' || dayName === 'Wed' || dayName === 'Fri' || isMeeting) {
    console.log('I need to go to the office today');
}
else if (dayName === 'Sat' || dayName === 'Sun') {
    console.log('I must enjoy the weekend');
}
else {
    console.log('Incorrect day');
}
console.log('after if-else block')
//array add swimming - print index - use push() to add swimming using indexOf()
const sports = ['football', 'american - football', 'baseball', 'rugby', 'tennis'];
console.log(sports)
if (sports.includes('swimming')) {
    console.log(sports.indexOf('swimming'));
}
else {
    sports.push('swimming');
}
console.log(sports);
//Swith block - all conditions are related to only one var - all conditions are comparing equals, every block must have one conditon
console.log(`\nswitch block`);
switch (20) {
    case 2:
        console.log('num is two');
        break;
    case 5:
        console.log('num is five');
        break;
    case 10:
        console.log('num is ten');
        break;
    case 15:
        console.log('num is fifteen');
        break;
    case 20:
        console.log('num is twenty');
        break;
    default:
        console.log(`num is ${num}`);
        break;

}
//using if-block localecompare() touppercase() 
var myName = 'fELipE';
console.log('\nusing if-block');
const myNamelc = myName.toLowerCase();
console.log(myNamelc);
if (myNamelc.localeCompare('happy') === 0) {
    console.log('good name');
}
else if (myNamelc.localeCompare('joy') === 0) {
    console.log(`\nname: ${myName} \nlength: ${myName.length} \nYour name is too short`);
}
else if (myNamelc.localeCompare('felipe') === 0) {
    console.log(myName.toUpperCase());
}
else {
    console.log('you have a different name than we expected');
}

