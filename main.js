// import { capitalise,revers,countLetters } from "./string.js";
// import { add as sum, PI, multiply as times } from "./math.js";
import calc from './math.js';
import user, {validateAge, validateEmail} from './user.js'
import * as colors from './colors.js';
// console.log(times(5,3))
// console.log(sum(5,3));
// console.log(PI)
// console.log(capitalise('hello'));
// console.log(revers('hello'));
// console.log(countLetters('hello'))

console.log(calc.add(10,5));
console.log(calc.subtract(10,5));
console.log(calc.multiply(10,5));
console.log(calc.divide(10,5))

console.log(user.name);
console.log(validateEmail(user.email));
console.log(validateEmail('alicegmail.com'));
console.log(validateAge(user.age));
console.log(validateAge(15));

console.log(colors.blue)
console.log(colors.red);
console.log(colors.green);
console.log(colors.yellow);