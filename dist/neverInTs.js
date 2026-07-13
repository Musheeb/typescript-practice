"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userDetails(user) {
    if (user === "Jack") {
        console.log("Jack is here");
        return;
    }
    if (user === "John") {
        console.log("John is here");
        return;
    }
    return user; // This is never. It should not supposed to be here because, we have already covered all the conditions.
}
//# sourceMappingURL=neverInTs.js.map