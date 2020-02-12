var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person;
}
var user = new User("Yuan", "Haizhuo");
console.log(greeter(user));
