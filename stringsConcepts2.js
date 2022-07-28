/**
 * Felipe Ruiz
 * review strings 
 */
//STRINGS - ENDSWITH()
let cityName1 = 'New YOrK ciTY';
let cityNameEndswith_ty = cityName1.endsWith('TY');
console.log(`\ncityName - ${cityName1}`);
console.log(`is ${cityName1} ends with 'TY'${cityNameEndswith_ty}`);
//STRING LENGTH
let cityName2 = 'New YOrK ciTY';
let cityNameLength = cityName2.length;
console.log(`cityName - ${cityName2}`);
console.log(`lenght = ${cityNameLength}`);
//UpperCase
let cityName_u = cityName2.toUpperCase();
console.log(`\ncityName - ${cityName2}`);
console.log(`cityName_u ${cityName_u}`);
//LOWERCASE
let cityName_l = cityName2.toLowerCase();
console.log(`\ncityName - ${cityName2}`);
console.log(`cityName_l ${cityName_l}`);
//STRINGS - STARTSWITH()
let cityName1a = 'New YOrK ciTY';
let cityNameStartswith_Ne = cityName1a.startsWith('YO');
console.log(`\ncityName - ${cityName1a}`);
console.log(`is ${cityName1a} starts with 'Ne'${cityNameStartswith_Ne}`);
//INCLUDE()
let cityName2a = 'New YOrK ciTY';
let cityNameIncludes_rK_ci = cityName2a.includes('rK ci');
console.log(`\cityName2a - ${cityName2a}`);
console.log(`is ${cityName2a} included in rK ${cityNameIncludes_rK_ci}`);
//REPLACE()
//REPLACE PAGE WITH PZGES nothing else 
let sentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wond LEaVE other TRACes';
let sentence_Replace_a_Z = sentence.replace('a', 'Z');
console.log(`\nsentence - ${sentence}`);
console.log(`sentence_Replace_a_Z - ${sentence_Replace_a_Z}`);
//REPLACE()
//REPLACE ALL a Z only lowercase a to Z : appeAr to ZpPeAr
let sentence1 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wond LEaVE other TRACes';
let sentence_Replace_All_a_Z = sentence1.replace(/a/g, 'Z');
console.log(`sentence_Replace_All_a_Z - ${sentence_Replace_All_a_Z}`);
//REPLACE()
//REPLACE ALL a Z BY IGNORING CASE
let sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wond LEaVE other TRACes';
let sentence_replace_All_a_Z_ignoreCase = sentence2.replace(/a/gi, 'Z');
console.log(`sentence_Replace_All_a_Z_ignoreCase - ${sentence_replace_All_a_Z_ignoreCase}`);
//JOIN()
//str1+Str2 using numerical operator or using the concat() where str.concat(str1, str2 ...)
let str1 = 'hello', str2 = ' ', str3 = 'world', str4 = '!';
let str = str1 + str2 + str3 + str4;
console.log(str);
let strConcat = str.concat(str1, str2, str3, str4);
console.log(strConcat)
//charAt()
//find a character at a given index
//beyond scope 200 
//invalid index -5
let sentence3 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wond LEaVE other TRACes';
let charAt23 = sentence3.charAt(35);
console.log(`sentence3 - ${sentence3}`);
console.log(`character at index 23 is : ${charAt23}`);
//FIRST OCCURENCE - PATTERN TO FIND FIRSTINDEXOF()
let hellomsg = 'Hello World Hello Dear Hello Boss Hello Family';
let indexof_e = hellomsg.indexOf('e');
let indexof_B = hellomsg.indexOf('B');
let indexof_y = hellomsg.indexOf('y');
let indexof_D = hellomsg.indexOf('D');
console.log(`\nhellomsg - ${hellomsg}`);
console.log(`indexof_e ${indexof_e}`);
console.log(`indexof_B ${indexof_B}`);
console.log(`indexof_y ${indexof_y}`);
console.log(`indexof_D ${indexof_D}`);
//LAST OCCURENCE - PATTERN TO FIND LASTINDEXOF()
let hellomsg1 = 'Hello World Hello Dear Hello Boss Hello Family';
let lastindexof_e = hellomsg1.lastIndexOf('e');
let lastindexof_E = hellomsg1.lastIndexOf('E');
let lastindexof_ell = hellomsg1.lastIndexOf('ell');
let lastindexof_rld_He = hellomsg1.lastIndexOf('rld He');
console.log(`\nhellomsg1 - ${hellomsg1}`);
console.log(`lastindexof_e - ${lastindexof_e}`);
console.log(`lastindexof_E - ${lastindexof_E}`);
console.log(`lastindexof_ell - ${lastindexof_ell}`);
console.log(`lastindexof_e - ${lastindexof_rld_He}`);
//COMPARE IF 2 STRING ARE EQUAL
//strs are equal , returns 0
//strs > other strs , returns 1
//strs < othe strs , returns -1
let stmt1 = 'New YorK CITY';
let stmt2 = 'New YorK CITY and';
const isEqual1 = stmt1.localeCompare(stmt2);
console.log(`is stmt2 equal to stmt1 ${isEqual1}`);
//SLICE - SUBSTRING(), SLICE(), SUBSTR()
let sentence4 = 'Pages That you vIew in tHIs WinDOw wont apPeAr in the broWSer history AND thEY LEaVE other TRACes';
const_substring1_6 = sentence4.substring(1, 6);
const_substring0_1 = sentence4.substring(0,1)
console.log(`\nsentence4 - ${sentence4}`);
console.log(`substring from 1 to 6 ${const_substring1_6}`);
console.log(`substring from 0 to 1 ${const_substring0_1}`);
//LENGTH SUBSTRING(LEN-1)
let sentence5 = 'Pages That you vIew in tHIs WinDOw wont apPeAr in the broWSer history AND thEY LEaVE other TRACes';
let sentence5_length = sentence5.length;
const lastchar = sentence5.substring(sentence5_length - 1);
console.log(`last character in my sentence5 : ${lastchar}`);
//SLICE (START , END )
let sentence6 = 'Pages That you vIew in tHIs WinDOw wont apPeAr in the broWSer history AND thEY LEaVE other TRACes';
console.log(`\nusing the slice function`);
const myslice = sentence6.slice(1);
console.log(`\nmyslice - ${myslice}`);

const myslice1 = sentence6.slice(1, 3);
console.log(`\nmyslice1 - ${myslice1}`);
//SUBSTR(START , LENGTH)
let Hello = 'Hello';
console.log((`\nusing substr-function`));
const res_Hello = Hello.substring( 4);
console.log(`\n res_Hello ${res_Hello}`);
//SPLIT STRING  - 'i' RETURNS AN ARRAY - takes all chars of i
const cityName = 'New York City is a big busy and noisy city';
const cityNameSplit = cityName.split('i');
console.log(`\ncityNameSplit by a ${cityNameSplit}`);
//SPLIT STRING - 'IG' RETURNS AN ARRAY
const cityNameSplit1 = cityName.split('ig');
console.log(`\ncityNameSplit show array ${cityNameSplit1}`);
//SPLIT STRING - ''
const cityNameSplit2 = cityName.split('');
console.log(`\ncityNameSplit show array ${cityNameSplit2}`);
//SPLIT STRING - ' '
let cityNameSplit3 = cityName.split(' ');
console.log(`\ncityNameSplit show array ${cityNameSplit3}`);
//TITLECASE 
let sentence7 = 'HERMANN'
let sentence_lc = sentence7.toLowerCase();
let firstLetter_sent_uc = sentence_lc.substring(0,1).toUpperCase();
let allLetters_sent_lc = sentence_lc.substring(1);
let TCLetter = firstLetter_sent_uc.concat(allLetters_sent_lc);
console.log(`\nTitlecase - ${TCLetter}`);














