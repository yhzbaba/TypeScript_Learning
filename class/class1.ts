class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("yhz");
console.log(greeter.greet());

//类继承
class Animal {
  move(distance: number = 0) {
    console.log("Animal moved " + distance + " m");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
const dog = new Dog();
dog.bark;
dog.move(10);
