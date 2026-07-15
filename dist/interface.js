"use strict";
// We use interace in TS to contract the objects and classes.
Object.defineProperty(exports, "__esModule", { value: true });
const favouriteSport = {
    name: "Soccer/Football",
    isOutdoor: true,
    rank: 1,
};
const user = {
    name: "Jesse",
    age: 35,
};
//Here in the above interface we have defined some methods. Now whenever we use this interface, we have to define these method into the variable or class. Example given below.
class SoccerClass {
    kickOff() {
        return "😅";
    }
    halfTime() {
        return true;
    }
    finalWhistle() {
        return 90;
    }
    offSide() {
        console.log("this returns nothing");
    }
    throwIn() {
        return { name: "Soccer" };
    }
    foul() {
        return [{ tackle: "brutal" }];
    }
    redCard() {
        return null;
    }
    yellowCard() {
        return undefined;
    }
}
//# sourceMappingURL=interface.js.map