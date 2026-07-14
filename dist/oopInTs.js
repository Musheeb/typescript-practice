"use strict";
/**
 * There are 4 pillars of OOPs. 1 - Inheritance 2 - Polymorphism 3 - Abstraction 4 - Encapsulation
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    orderChai() {
        console.log(`Please one chai - ${this.name} which costs ${this.price}`);
    }
}
const choi = new Chai("Masala", 20);
// public
class ChaiPublic {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const choiPublic = new ChaiPublic("Masala", 30);
console.log("Private chai name is -> ", choiPublic.name);
console.log("Private chai price is -> ", choiPublic.price);
//private
class ChaiPrivate {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getChaiPrice() {
        return this.price;
    }
    getChaiName() {
        return this.name;
    }
}
const privateChai = new ChaiPrivate("Adrak", 30);
// console.log(privateChai.name); // Here this is not accessible because assigned as private.
// console.log(privateChai.price); // Here this is not accessible because assigned as private.
console.log(privateChai.getChaiName());
console.log(privateChai.getChaiPrice());
//protected.
class ChaiProtected {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class NewChaiProtected extends ChaiProtected {
    getChaiPrice() {
        return this.price; // here is this variable was declared private in ChaiProtected Class then we won't be able to access it.
    }
    getChaiName() {
        return this.name; // here is this variable was declared private in ChaiProtected Class then we won't be able to access it.
    }
}
const protectedChai = new NewChaiProtected("Lemon", 40);
console.log(protectedChai.getChaiName());
console.log(protectedChai.getChaiPrice());
//static.
// Here in class whatever is assigned static is only accessible to the class. Not accessible to the object.
class StaticExampleClass {
    static name = "Hola";
    static price = 40;
    constructor(name, price) {
        StaticExampleClass.name = name; // Here we have to use directly the Classname of the static property to access the static variable or properties.
        StaticExampleClass.price = price; // Here we have to use directly the Classname of the static property to access the static variable or properties.
    }
}
console.log(StaticExampleClass.name); // No new keyword is allowed here.
console.log(StaticExampleClass.price); // No new keyword is allowed here.
//Another example of static.
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(4, 9));
//Readonly in Ts. - Values those are not changeable or cannot be manipulated ever.
class ReadOnlyExample {
    name = "Master";
    constructor(name) {
        this.name = name;
    }
}
// ReadOnlyExample.name = "Student"; // Here can not assign new value because it is read-only property.
//# sourceMappingURL=oopInTs.js.map