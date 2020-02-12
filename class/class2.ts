class Animal2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //默认参数
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`);
  }
}
class Snake extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 5) {
    console.log("Slithering...");
    super.move(distance);
  }
}
class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 45) {
    console.log("Galloping...");
    super.move(distance);
  }
}

let sam = new Snake("Snake_1");
let tom: Animal = new Horse("Horse_1");
sam.move();
tom.move(34);
