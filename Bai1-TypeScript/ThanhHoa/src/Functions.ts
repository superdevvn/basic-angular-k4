

let emp1 = new EmployerWithES5("Nguyen Van A", 1);
document.getElementById('div1').innerHTML = emp1.say();
document.getElementById('div2').innerHTML = emp1.think();

let man1 = new ManagerWithES6();
document.getElementById('div3').innerHTML = man1.say();
document.getElementById('div4').innerHTML = man1.think('Boss');