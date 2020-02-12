//set get
var password = "secret password";
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password === "secret password") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var yhz = new Employee2();
yhz.fullName = "hahah";
if (yhz.fullName) {
    console.log(yhz.fullName);
}
