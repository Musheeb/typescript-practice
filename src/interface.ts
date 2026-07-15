// We use interace in TS to contract the objects and classes.

interface Sports {
  name: string;
  isOutdoor: boolean;
  rank: number;
}

const favouriteSport: Sports = {
  name: "Soccer/Football",
  isOutdoor: true,
  rank: 1,
};

// interface merging.
interface User {
  name: string;
}
interface User {
  age: number;
}

const user: User = {
  name: "Jesse",
  age: 35,
};

//interface for methods.
interface Soccer {
  kickOff(): string; // This method will return string.
  halfTime(): boolean; // This method will return boolean.
  finalWhistle(): number; //This method will return a number.
  offSide(): void; // This method will return nothing.
  throwIn(): object; // This method will return object.
  foul(): object[]; // This method will return array of objects.
  redCard(): null; // This method will return null.
  yellowCard(): undefined; // This method will return undefined.
}
//Here in the above interface we have defined some methods. Now whenever we use this interface, we have to define these method into the variable or class. Example given below.
class SoccerClass implements Soccer {
  kickOff(): string {
    return "😅";
  }
  halfTime(): boolean {
    return true;
  }
  finalWhistle(): number {
    return 90;
  }
  offSide(): void {
    console.log("this returns nothing");
  }
  throwIn(): object {
    return { name: "Soccer" };
  }
  foul(): object[] {
    return [{ tackle: "brutal" }];
  }
  redCard(): null {
    return null;
  }
  yellowCard(): undefined {
    return undefined;
  }
}

interface Add {
  (a: number, b: number): number;
}
