// Generics are used to avoid code duplication, code reuseability, and runtime type casting. Examples are given below.

function getNumber<T>(value: T): T {
  return value;
}
//Now here when we call this getNumber method and pass some value, it will infer it's type and execute the method with that type after casting that type.
//for example.
getNumber("AB-Deviliers");
getNumber(20);
getNumber(["male", "female"]);
getNumber([{ name: "Frank", age: 40 }]);

function returnA<T, U>(a: T, b: U): T {
  return a;
}

returnA("Frank", 2);
returnA(40, { name: "Frank" });
returnA(true, false);
