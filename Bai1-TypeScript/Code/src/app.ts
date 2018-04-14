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

    public taoBien() {
        let a: any;
        a = '';
        a = 20;
        a = [];
    }

    public phanGiaiDoiTuong(obj: any) {
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
    }

    public checkBien(value: string | number) {
        console.log(value);
        
        if (typeof value === 'number') {
            document.getElementById('div2').innerHTML = 'la so';
        }
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

// var user = new Student("Trang", "Huynh");
// document.getElementById('div0').innerHTML = user.fullName;

// var [first, ...rest] = array;
