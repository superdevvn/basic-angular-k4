// class Student {
//  name: string;
// }

// var a = undefined;
// a = null;
// a = 0;
// a = '';
// a = NaN;
// a = false;

// if (a) {
//     console.log('co gia tri');
// } else {
//     console.log('ko co');
// }

interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {
    fullName: string;

    constructor(public firstName, public lastName) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

class Teacher extends Student {
    private luong: number;

    constructor(luong: number) {
        super('first', 'last');
        this.luong = luong;
    }

    public layLuong(heSo?: number): string {
        return `${this.fullName}: 
        ${this.luong * (heSo || 2)}`;
        //return this.fullName + ': ' + this.luong * (heSo ? heSo : 2);

        // if (heSo) {
        //     return this.fullName + ': ' + this.luong * heSo;
        // } else {
        //     return this.fullName + ': ' + this.luong;
        // }
    }

    public setTime() {
        setTimeout((a: string) => {
            //console.log(this);

            document.getElementById('div1').innerHTML = this.firstName;
        }, 1000);

        setTimeout(function (a: string) {
            //console.log(this);

            document.getElementById('div1').innerHTML = this.firstName;
        }.bind(this), 1000);
    }
}
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
