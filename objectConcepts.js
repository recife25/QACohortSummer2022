/**
 * object - body {} curly brackets 
 * 
 */
let myObj = {
    myName: 'Felipe Ruiz',
    11: true,
    state: 'New York',
    5: 'five',
    age: 58,
    true: 22

}
//using for in loop to traver values of the object attributes
console.log(myObj);
console.log(`\nusing for in loop for objecdt`);
for (let obj in myObj) {
    console.log(obj);
    console.log(typeof obj);
}
//to add key-values to the object 
myObj.gender = 'male';
console.log(`\nprinting my obj`);
console.log(myObj);
myObj[2] = 'two'; 
myObj['ssn number'] = 123456789;
myObj['hasGraduated'] = 'true';
console.log('\nprinting myobj\n');
console.log(myObj);
console.log(myObj.hasGraduated); // Graduated values is printed using dot operator
console.log(myObj['hasGraduated']); // Gradueted value is printed myobj[] brackets
console.log(myObj['ssn number']);//print the value of ssn number
console.log(myObj[2]);// print the value of 2 attribute
//to delete the attribute from object 
//operator will delete the attribute if exists or if the attribute does not exist in the object returns true - note / it changes object
console.log(delete myObj.hasGraduated);
console.log('\n print my object');
console.log(myObj);
//delete '2' attribute and its value
let is2delete = delete myObj[2];
console.log(`\nis2deleted - ${is2delete}`);
console.log('\nprint my object');
console.log(myObj);
//delete ssn number attribute and its value 
console.log('\ndeleted ssn number');
let ssndelete = delete myObj['ssn number'];
console.log(`\nis ssn number deleted - ${ssndelete}`);
console.log(myObj);
//to verify if an attribute is present in the object or not operator 
//using the operator IN 
const is_abcd_present = 'abcd' in myObj;
console.log(`\n is 'abcd' present in myObj ${is_abcd_present}`);// returns false - no abcd attribute 
const is_state_present = 'state' in myObj;
console.log(`\n is 'state' present in myObj ${is_state_present}`);

