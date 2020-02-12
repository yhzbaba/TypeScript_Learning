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

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let cc = getCounter();
cc.interval = 10;
cc.reset();
cc(10);

//接口继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select();
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {}

//报错
// class ImageC implements SelectableControl {
//     select() { }
// }
