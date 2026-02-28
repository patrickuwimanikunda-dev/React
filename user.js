export const validateEmail = (email)=>email.includes('@');
export const validateAge = (age)=>age>=18;
const user = {name: "Alice", email: "alice@gmail.com", age: 25};
export default user;