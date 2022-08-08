/**
 * object 
object syntax:
let objectName ={
    attribute1 : attribute1Value,
    attribute2 : attribute2Value, 
    attribute3 : attribute3Value,
    attribute4 : attribute4Value

    attribute name have to be unique in the object 
}
 */

let myObj = {
    myName: 'Felipe Ruiz',
    age: 58,
    state: 'New York',
    pastJobs: {
        current: 'unemployed',
        past1: 'QA Analyst',
        past2: 'IT Suport'
    },
    siblingNames: ['Lissette', 'Danilo', 'Gabby']

};
//print my object 
console.log('print my object');
// console.log(myObj, 'nothing get printed');
console.log('\nprint value of name attribute in myobj-object');
console.log('using the dot operator');
console.log(myObj.myName, myObj.age, myObj.state);
console.log('\nusing the brackets');
console.log(myObj['myName'], myObj['age']);
console.log('\nPrint value of pastjob attribute in myobj object');
console.log('using the dot operator');
console.log(myObj.pastJobs.current, myObj.pastJobs.past1, myObj.pastJobs.past2);
