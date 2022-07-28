/**
 * destructing assignment - 
 * const {getName, dob} = require('./user);
 * console.log(
 * `${getname()} was born on ${dob}.`);
 */
// const user = require('./user');
// console.log(`User: ${user.getName()}lives in ${user.getlocation()} and was born ${user.dob}`);
// import { getName, dob } from './user';
// console.log(
//     `${getName} was born on ${dob}`
// );
// const { getName, dob } = require('./user');
// console.log(
//     `${getName()} was born on ${dob}`
// );
const User = require('./classUser');
const Phil = new User('Phil', 58, 'pjfruiz@outlook.com');
console.log(Phil.getUserStats());
