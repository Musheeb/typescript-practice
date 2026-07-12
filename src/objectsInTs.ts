const football = {
  team1: "Egypt",
  team2: "Fifantina",
  isMatchFixed: true,
  minutesPlayed: 99,
};

// {
//     team1: string;
//     team2: string;
//     isMatchFixed: boolean;
//     minutesPlayed: number
// }

type AvailableSports = {
  football: boolean;
  cricket: boolean;
  pingPong: boolean;
  hockey: boolean;
  baseBall: boolean;
};

const sports: AvailableSports = {
  football: true,
  cricket: true,
  pingPong: true,
  hockey: false,
  baseBall: false,
};

type Item = { name: string; quantity: number };
type Venue = { address: string; isAvailable: boolean };

type FootballTournament = {
  tournamentName: "Fifa Worldcup 2026";
  items: Item[];
  address: Venue;
};

type Player = {
  name: string;
  heightInCms: number;
  weightInKgs: number;
  isRetired: boolean;
};

const playerDetails: Player = {
  name: "Cristiano Ronaldo",
  heightInCms: 87,
  weightInKgs: 92,
  isRetired: true,
};

// Partial
type T20 = { format: string; overs: number; isLimitedOvers: boolean };
const updateT20Cricket = (updates: Partial<T20>) => {
  console.log("Updated cricket -> ", updates);
};

updateT20Cricket({ overs: 20 });
updateT20Cricket({ isLimitedOvers: true });
updateT20Cricket({});

//Required
type OneDay = { format: string; overs: number; isLimitedOvers: boolean };
const updateOneDay = (OneD: Required<OneDay>) => {
  console.log("One day -> ", OneD);
};

updateOneDay({
  format: "One Day International (ODI)",
  overs: 50,
  isLimitedOvers: true,
});

//Pick
type TestCricket = { format: string; overs: number; isLimitedOvers: boolean };
type UnlimitedOvers = Pick<TestCricket, "format" | "isLimitedOvers">;

const Test: UnlimitedOvers = {
  format: "Test Cricket (5 Days)",
  isLimitedOvers: false,
};

//Omit
type Hundred = { format: string; overs: number; isLimitedOvers: boolean };
type HundredCricket = Omit<Hundred, "overs">;

const HundredEnglish: HundredCricket = {
  format: "Hundreds (English league)",
  isLimitedOvers: true,
};

type Cricket = {
  format: string;
  overs: number;
  isLimited: boolean;
  description: string;
};

const t20: Cricket = {
  format: "T20",
  overs: 20,
  isLimited: true,
  description:
    "This is the cricket where players are tested brutally. The pace of the game is so fast that a player can not get a time settle. But those who get, will dominate the format.",
};

const odi: Cricket = {
  format: "ODI (One Day International)",
  overs: 50,
  isLimited: true,
  description:
    "This is the format where players get time to settle, strategize things, get enough time to implement planes, and experiment things.",
};

const test: Cricket = {
  format: "Test Cricket",
  overs: 90,
  isLimited: false,
  description:
    "This is the game of temprament. Not everyone can play this. It stays for 5 days. You have to be on ground whole day, fielding or batting as per your current conditions. ",
};
