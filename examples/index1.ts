let isDone: boolean = true;
let isUndone: boolean = false;

let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

let name1: string = "bob";
let name2: string = `Hello ${name1}`;

let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3];

let touple1: [string, number] = ["hello", 10];

enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Blue;

let notSure: any = 4;
let list: any[] = [1, true, "free"];

function warnUser(): void {
  console.log("hahahaha");
}

function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("something failed!");
}

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

let someValue: any = "this is a string";
//let strLength: number = (<string>someValue).length;
let stringLength: number = (someValue as string).length;
