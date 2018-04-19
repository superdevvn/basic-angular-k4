/* ============== BLOCK STOPE ==============*/
/*
	Block FOR > Block IF > Block WHILE
for{
	if(){
		while(){

		}
	}
}
*/

/* ============== VAR ==============*/
/*
var score = 100;
if (score > 50){
	var msg = "Win"
	console.log(msg);
}
console.log(score);
console.log(msg);
*/

/* ============== LET ==============*/
// BIẾN let phạm vi truy cập nhỏ hơn biến var khai báo 1 biến sử dụng tạm thời trong BLOCK STOPE
let score = 100;
let msg ="";
if (score > 50){
	msg = "Win"
	console.log(msg);
}
console.log(score);
console.log(msg);

