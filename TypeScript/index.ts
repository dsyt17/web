let myArray: number[] = [1, 2, 3];
let myArray2: Array<number> = [1, 2, 3];
// console.log(myArray, myArray2);

let x: [string, number];
x = ["str", 2];
let y: [string, number] = ["str", 2];
// console.log(x, y);

let anyArray: Array<any> = [1, "2", [3]];
// console.log(anyArray);

enum Directions {
  Up = 3,
  Down = 7,
  Left = 9,
  Right,
}
// console.log(Directions.Up, Directions.Down, Directions.Left, Directions.Right);

const create = (o: object | null): void => {};
let id: number | string;

// type Name = string;
// let name1: Name = "s";
// console.log(typeof name1);

enum Socials {
  vk = "vk.com",
  yt = "yt.com",
  tg = "tg.com",
}

// console.log(Socials.yt);

const createPassword = (name: string = "some", age?: number | string): string =>
  `${name}${age}`;
const pass: string = createPassword();
// console.log(pass);

type Person = {
  name: string;
  age: number;
  nickName?: string;
  getPass?: () => string;
};
let user: Person = {
  name: "ds",
  age: 21,
  nickName: "s",
};
let admin: Person = {
  name: "ds",
  age: 21,
};
// console.log(user.age);

class User {
  //   public name: string;
  //   private age: number = 0;
  //   protected nickName: string;
  //   readonly pass: number;

  //   constructor(name1: string, age1: number, nickName1: string) {
  //     this.name = name1;
  //     this.age = age1;
  //     this.nickName = nickName1;
  //   }
  constructor(
    public name: string,
    private age: number = 0,
    protected nickName?: string,
    readonly pass?: number
  ) {}
  setAge(age: number) {
    this.age = age;
  }
  set myAge(age: number) {
    this.age = age;
  }
  static doSomething() {
    console.log("I do...");
  }
}

let user2 = new User("1", 2, "2");
user2.myAge = 21;
user2.setAge(22);

// User.doSomething();

class MyUser extends User {
  who: string = "DS";
  static doSomething(): void {
    console.log("I do...222");
  }
}

let dsyt = new MyUser("ds");
// console.log(dsyt);
// MyUser.doSomething();

abstract class Shape {
  constructor(public name: string) {}

  getName(): void {
    console.log(this.name);
  }
  abstract getArea(): number;
}

class Square extends Shape {
  side: number;
  constructor(side: number, name: string) {
    super(name);
    this.side = side;
  }
  getArea(): number {
    return this.side ** 2;
  }
}

let box = new Square(3, "mySquare");
console.log(box.getArea(), box.getName());
