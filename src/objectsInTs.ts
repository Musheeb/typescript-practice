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
