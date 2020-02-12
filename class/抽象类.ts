abstract class Food {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  abstract smell(): void;
}

class Mongo extends Food {
  constructor(name: string) {
    super(name);
  }
  smell() {
    console.log("I'm mongo");
  }
}
