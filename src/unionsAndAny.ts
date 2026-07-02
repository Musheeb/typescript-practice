//Union
let shape: string | number = "30";

//Union with predefined variable values.
let seatType: "aisle" | "window" | "middle" = "aisle";

//Union with predefined variable values 2.
let status: "pending" | "success" | "reject" | "error" = "success";

//Any
let currentValue;

//Annotated/defined any
let username: any;

//Recommended - Always avoid any.
let evenNumber: number | undefined;

const array = [1, 2, 3, 4, 5];

for (let number of array) {
  if (number === 5) {
    currentValue = number;
    break;
  }
}

console.log(currentValue);
