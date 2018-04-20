/* ============ CASE 1 ================ */
/*let arr = [123, "ES6", false];

// let id   = arr [0];
// let name = arr [1];
// let free = arr [2];
let [id, name, free] = arr;

console.log(id + " -" + name + " - " + free);
*/
/* =============== CASE 2 ==================*/
let objCourse = {
	id: 456,
	name: "ES6",
	free: false,
	nguoidung: "adminphp"
}

let {name, id, free, nguoidung = "admin"} = objCourse;
console.log(id + " - " + name + " - " + free + " - " + nguoidung);
