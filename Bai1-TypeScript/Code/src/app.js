// class Student {
//  name: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(luong) {
        var _this = _super.call(this, 'first', 'last') || this;
        _this.luong = luong;
        return _this;
    }
    Teacher.prototype.layLuong = function (heSo) {
        return this.fullName + ": \n        " + this.luong * (heSo || 2);
        //return this.fullName + ': ' + this.luong * (heSo ? heSo : 2);
        // if (heSo) {
        //     return this.fullName + ': ' + this.luong * heSo;
        // } else {
        //     return this.fullName + ': ' + this.luong;
        // }
    };
    Teacher.prototype.setTime = function () {
        var _this = this;
        setTimeout(function (a) {
            //console.log(this);
            document.getElementById('div1').innerHTML = _this.firstName;
        }, 1000);
        setTimeout(function (a) {
            //console.log(this);
            document.getElementById('div1').innerHTML = this.firstName;
        }.bind(this), 1000);
    };
    Teacher.prototype.taoBien = function () {
        var a;
        a = '';
        a = 20;
        a = [];
    };
    Teacher.prototype.phanGiaiDoiTuong = function (obj) {
        // let x = obj.name;
        // let y = obj.value;
        // let {name:x1, value: y1} = obj;
        // console.log(x1, y1);
        // var array = [1, 2, 3];
        // var [first, ...rest] = array;
        // console.log(rest);
        // var copy = {
        //     ...obj,
        //     value: 1000
        // };
        // console.log(copy);
        // let obj2 = {
        //     name: obj.name,
        //     value: obj.value
        // };
        // console.log(obj2);
    };
    Teacher.prototype.checkBien = function (value) {
        console.log(value);
        if (typeof value === 'number') {
            document.getElementById('div2').innerHTML = 'la so';
        }
    };
    return Teacher;
}(Student));
var user = new Teacher(1000);
user.checkBien(1);
// var user = new Teacher(1000);
// user.phanGiaiDoiTuong({
//     name: 'Hey',
//     value: 100
// });
// var user = new Teacher(1000);
// document.getElementById('div2').innerHTML = user.layLuong(3).toString();
// var user = new Teacher(1000);
// document.getElementById('div1').innerHTML = user.layLuong().toString();
// var user = new Student("Trang", "Huynh");
// document.getElementById('div0').innerHTML = user.fullName;
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// var { firstName } = user;
// var copy = {    
//     ...user,
//     firstName: 'huhu'
// };
// var array = [1,2,3];
// var [first, ...rest] = array;
