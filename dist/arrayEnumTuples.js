"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array in TS.
const array1 = ["UAE", "USA", "NewZealand"];
const array2 = [10, 5, 30];
const array3 = [true, false, true, true, false, true];
const array4 = [
    {
        name: "Cricket",
        scope: 10,
        isPopular: true,
    },
    {
        name: "Football",
        scope: 8,
        isPopular: true,
    },
    {
        name: "VolleyBall",
        scope: 5,
        isPopular: false,
    },
];
// readonly in array.
const readonlyArray = [20, 30];
const location = [30.2232, 12.1231];
//enum in TS.
var Number;
(function (Number) {
    Number[Number["PENDING"] = 100] = "PENDING";
    Number[Number["SERVED"] = 101] = "SERVED";
    Number[Number["CANCELED"] = 102] = "CANCELED";
})(Number || (Number = {}));
console.log("Hey man");
console.log("Number enum -> ", Number);
var Chai;
(function (Chai) {
    Chai["MASALA"] = "masala";
    Chai["ADRAK"] = "adrak";
    Chai["ELAICHI"] = "elaichi";
})(Chai || (Chai = {}));
var Sports2;
(function (Sports2) {
    Sports2["CRICKET"] = "cricket";
    Sports2["FOOTBALL"] = "football";
    Sports2["VOLLEYBALL"] = "volleyball";
    Sports2["BASEBALL"] = "baseball";
})(Sports2 || (Sports2 = {}));
//enum with const (Not recommended and not used so often in production by the community)
var Sports3;
(function (Sports3) {
    Sports3["CRICKET"] = "cricket";
    Sports3["FOOTBALL"] = "football";
    Sports3["BASEBALL"] = "baseball";
})(Sports3 || (Sports3 = {}));
// Tuples in TS.
const tupleInTs = ["Frank", 20]; //Order should be same.
const tupleInTs2 = ["Castle", 30, true];
const tupleInTs3 = ["Castle", 30]; // Here boolean is optional.
//Named tuples in TS.
const namedTuples = ["Mush", 30];
//# sourceMappingURL=arrayEnumTuples.js.map