"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const football = {
    team1: "Egypt",
    team2: "Fifantina",
    isMatchFixed: true,
    minutesPlayed: 99,
};
const sports = {
    football: true,
    cricket: true,
    pingPong: true,
    hockey: false,
    baseBall: false,
};
const playerDetails = {
    name: "Cristiano Ronaldo",
    heightInCms: 87,
    weightInKgs: 92,
    isRetired: true,
};
const updateT20Cricket = (updates) => {
    console.log("Updated cricket -> ", updates);
};
updateT20Cricket({ overs: 20 });
updateT20Cricket({ isLimitedOvers: true });
updateT20Cricket({});
const updateOneDay = (OneD) => {
    console.log("One day -> ", OneD);
};
updateOneDay({
    format: "One Day International (ODI)",
    overs: 50,
    isLimitedOvers: true,
});
const Test = {
    format: "Test Cricket (5 Days)",
    isLimitedOvers: false,
};
const HundredEnglish = {
    format: "Hundreds (English league)",
    isLimitedOvers: true,
};
const t20 = {
    format: "T20",
    overs: 20,
    isLimited: true,
    description: "This is the cricket where players are tested brutally. The pace of the game is so fast that a player can not get a time settle. But those who get, will dominate the format.",
};
const odi = {
    format: "ODI (One Day International)",
    overs: 50,
    isLimited: true,
    description: "This is the format where players get time to settle, strategize things, get enough time to implement planes, and experiment things.",
};
const test = {
    format: "Test Cricket",
    overs: 90,
    isLimited: false,
    description: "This is the game of temprament. Not everyone can play this. It stays for 5 days. You have to be on ground whole day, fielding or batting as per your current conditions. ",
};
//# sourceMappingURL=objectsInTs.js.map