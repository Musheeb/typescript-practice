"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type defining of function parameter.
function dreamBig(type) {
    console.log(`My dream type is ${type}`);
    return `Dream Big`;
}
// This function returns nothing.
function football(type) {
    console.log("This function returns nothing");
}
//Function type with optional.
function cricket(type) {
    console.log(`Cricket type is ${type}`);
}
//Function with return type.
function sports(type, category, intensity) {
    console.log("This function should return object.");
    return {
        type: "Cricket",
        category: "outdoor",
        intensity: 10,
    };
}
//Function with return type 2.
function sports2(type, intensity) {
    console.log(`Sports type is ${type} and it's intensity is ${intensity}`);
    return `This function should return string only`;
}
//# sourceMappingURL=functionsInTs.js.map