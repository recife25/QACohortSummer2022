/**
 *      
 * creating & exporting module
 */
// const getName = () => {
//     return 'Phil';
// }
//variations in syntax - export methods & values as you go:    
exports.getName = () => {
    return 'Phil';
 }
// //exporting multiple methods and values 
// const getlocation = () => {
//     return 'Queens, NY';
// }
//variations in syntax - export methods & values as you go:
exports.getlocation = () => {
    return 'Queens, NY';
}
//export const dob = '02.05.1964';
exports.dob = '02.05.1964'

exports.getName = this.getName;
exports.getlocation = this.getlocation;
exports.dob = '02.05.1964';

// export const getName = getName;
// export const getlocation = getlocation;
// export const dob = dateOfBirth;