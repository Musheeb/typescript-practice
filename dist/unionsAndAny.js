"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union
let shape = "30";
//Union with predefined variable values.
let seatType = "aisle";
//Union with predefined variable values 2.
let status = "success";
//Any
let currentValue;
//Annotated/defined any
let username;
//Recommended - Always avoid any.
let evenNumber;
const array = [1, 2, 3, 4, 5];
for (let number of array) {
    if (number === 5) {
        currentValue = number;
        break;
    }
}
console.log(currentValue);
//# sourceMappingURL=unionsAndAny.js.map