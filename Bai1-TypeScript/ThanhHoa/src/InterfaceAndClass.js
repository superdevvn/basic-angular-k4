var EmployerWithES5 = /** @class */ (function () {
    function EmployerWithES5(name, id) {
        // Mix string with value of variable
        this.say = function () {
            return 'My name is ' + this.name + '. I am a employer with id ' + this.id;
        };
        // Function Declared
        this.think = function (target) {
            return this.name + " will become " + (target ? target : 'Manager') + " in this year";
        };
        this.name = name;
        this.id = id;
    }
    return EmployerWithES5;
}());
var ManagerWithES6 = /** @class */ (function () {
    // Combine declare properties and constructor
    function ManagerWithES6(name, id, sex) {
        if (name === void 0) { name = 'Hoa'; }
        if (id === void 0) { id = 4; }
        var _this = this;
        this.name = name;
        this.id = id;
        this.sex = sex;
        // Template Literals
        this.say = function () {
            return "My name is " + _this.name + ". I am a manager with id " + _this.id;
        };
        // Arrow Function
        // Default Parameters
        this.think = function (target) {
            if (target === void 0) { target = 'President'; }
            return _this.name + " will become " + target + " in this year with ES6";
        };
        this.name = name;
        this.id = id;
        this.sex = sex || 'male';
    }
    return ManagerWithES6;
}());
