class Animal3 {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} m`);
  }
}
class Rhino extends Animal3 {
  constructor() {
    super("Rhino");
  }
}
let animal = new Animal3("Goat");
let rhino = new Rhino();

class Person {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//let john = new Person("John");
