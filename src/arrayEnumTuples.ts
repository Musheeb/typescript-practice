//Array in TS.
const array1: string[] = ["UAE", "USA", "NewZealand"];

const array2: number[] = [10, 5, 30];

const array3: boolean[] = [true, false, true, true, false, true];

type Sports = {
  name: string;
  scope: number;
  isPopular: boolean;
};
const array4: Sports[] = [
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

const readonlyArray: readonly [number, number] = [20, 30];
const location: readonly [number, number] = [30.2232, 12.1231];

//enum in TS.

enum Number {
  PENDING = 100,
  SERVED, // 101 assigned automatically.
  CANCELED, // 102 assigned automatically.
}

console.log("Hey man");
console.log("Number enum -> ", Number);

enum Chai {
  MASALA = "masala",
  ADRAK = "adrak",
  ELAICHI = "elaichi",
}

enum Sports2 {
  CRICKET = "cricket",
  FOOTBALL = "football",
  VOLLEYBALL = "volleyball",
  BASEBALL = "baseball",
}

//enum with const (Not recommended and not used so often in production by the community)
const enum Sports3 {
  CRICKET = "cricket",
  FOOTBALL = "football",
  BASEBALL = "baseball",
}

// Tuples in TS.
const tupleInTs: [string, number] = ["Frank", 20]; //Order should be same.
const tupleInTs2: [string, number, boolean?] = ["Castle", 30, true];
const tupleInTs3: [string, number, boolean?] = ["Castle", 30]; // Here boolean is optional.

//Named tuples in TS.
const namedTuples: [name: string, age: number] = ["Mush", 30];
