//for loop - print all values in separate lines
console.log('for loop - print all values in separate lines');
const sports = ['football', 'american - football', 'basketball', 'baseball', 'rugby'];
for (i = 0; i <= sports.length-1; i++){
    console.log(`\nprint all values for loop - ${sports[i]}`);
}
//for loop - print even index values
console.log('//for loop - print even index values');
for (i = 0; i <= sports.length-1 ; i+=2){
    console.log(`\nprint even index - ${sports[i]}`);
}
//for loop - print odd index values
console.log('\nfor loop - print odd index values');
for (i = 0; i <= sports.length-1; i += 3){
    console.log(`\nprint odd index - ${sports[i]}`);
}
//for loop use split()function - to abbreviate one word - good to G
console.log('\nabbr single word touppercase() split()')
const word = 'good';
console.log(`word - ${word}`);
let abbr = ' ';
const abbrWord = word.toUpperCase().split(' ');
for (i = 0; i <= abbrWord.length - 1; i++){
    abbr = abbr + abbrWord[i].substring(0, 1);
}
console.log(`abbr - ${abbr}`);

//for loop use reverse() - array value in reverse order  
console.log('for loop use reverse() - array value in reverse order');
const sports1 = ['football', 'tennis', 'basketball', 'baseball', 'rugby'];
let sportValues = sports1.reverse();
//console.log(sportValues);
for (i = 0; i <= sportValues.length - 1; i++){
    console.log(sportValues[i]);
}
