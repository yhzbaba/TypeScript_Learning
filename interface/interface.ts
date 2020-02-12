interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//可选属性
interface SquareS {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): SquareS {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });

//只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5;这里会报错

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro.push(5);   报错

//函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(
  source: string,
  subString: string
): boolean {
  let result = source.search(subString);
  return result > -1;
};

//可索引类型接口
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArrayReadOnly: ReadonlyStringArray = ["Alice", "Bob"];
//myArrayReadOnly[0] = "yhz";   报错

//类类型
//实例部分
interface ClockInterface {
  tick();
}

//构造器部分
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick toc");
  }
}

let digital = createClock(DigitalClock, 12, 60);
let analog = createClock(AnalogClock, 7, 32);
