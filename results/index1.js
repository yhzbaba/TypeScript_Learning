var isDone = true;
var isUndone = false;
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var name1 = "bob";
var name2 = "Hello " + name1;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3];
var touple1 = ["hello", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var notSure = 4;
var list = [1, true, "free"];
function warnUser() {
    console.log("hahahaha");
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something failed!");
}
create({ prop: 0 });
create(null);
var someValue = "this is a string";
//let strLength: number = (<string>someValue).length;
var stringLength = someValue.length;
