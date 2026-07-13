let name: any = "Mushan";
name = "Cris";
name = "Bonjor";
name = 10;
name = "Man";
console.log((name as string).toUpperCase());

let age: unknown = 30;
age = 40;
age = "hey";
age = "ABD";
//Below code is not valid with unknown.
// console.log(age.toUpperCase());
