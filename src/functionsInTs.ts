//Type defining of function parameter.
function dreamBig(type: string) {
  console.log(`My dream type is ${type}`);
  return `Dream Big`;
}

// This function returns nothing.
function football(type: string): void {
  console.log("This function returns nothing");
}

//Function type with optional.
function cricket(type?: string) {
  console.log(`Cricket type is ${type}`);
}

//Function with return type.
function sports(
  type: string,
  category: "indoor" | "outdoor",
  intensity: number,
): object {
  console.log("This function should return object.");
  return {
    type: "Cricket",
    category: "outdoor",
    intensity: 10,
  };
}

//Function with return type 2.
function sports2(type: string, intensity: number): string {
  console.log(`Sports type is ${type} and it's intensity is ${intensity}`);
  return `This function should return string only`;
}
