//set get
let password = "secret password";

class Employee2 {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (password && password === "secret password") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let yhz = new Employee2();
yhz.fullName = "hahah";
if (yhz.fullName) {
  console.log(yhz.fullName);
}
