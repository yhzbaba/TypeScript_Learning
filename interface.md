## 接口初探

```typescript
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

## 可选属性

```typescript
//可选属性
interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): Square {
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
```

## 只读属性

对象创建的时候才能改变属性,不能被赋值给其他对象,其余时候也不能被修改
变量是 const
属性是 readonly

```typescript
//只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5;这里会报错

//只读数组
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro.push(5);   报错
```

## 额外属性检查

实际上应该反思自己是不是类型写错了，而不是去加额外属性

```typescript
//索引签名
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; //可能会有别的属性进来
}
```

## 函数类型接口

```typescript
//函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

## 可索引类型

typescript 支持两种签名，字符串签名和数字签名
要注意两种在接口中混用的时候，数字签名的返回类型必须是字符串签名返回类型的子类

```typescript
//可索引类型接口
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArrayReadOnly: ReadonlyStringArra;
```

## 类类型
```typescript
//类类型
//实例部分
interface ClockInterface {
  tick();
}

//构造器部分
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number)
  : ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log("tick toc");
  }
}

let digital = createClock(DigitalClock, 12, 60);
let analog = createClock(AnalogClock, 7, 32);
```

## 继承接口
```typescript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 混合类型
```typescript
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) {

    }) as Counter
    counter.interval = 123;
    counter.reset = function () {

    }
    return counter
}

let cc = getCounter();
cc.interval = 10;
cc.reset();
cc(10);
```

## 接口继承类
当我们创建一个接口去继承拥有私有或受保护的成员的类的时候，接口的类型只能被这个类或其子类实现
```typescript
//接口继承类
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select()
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
}

//报错
// class ImageC implements SelectableControl {
//     select() { }
// }
```