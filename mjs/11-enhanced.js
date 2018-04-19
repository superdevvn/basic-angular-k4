/* ==================== Property value shorthand ==================== */
/*
function getCourse(name,price, free){
	return{
		name,
		price,
		free
	}
}
console.log(getCourse("ES6",20, false));
*/

/* ==================== Method Properties ==================== */

function getCourse(name,price, free){
	return{
		name,
		price,
		free,

		showInfo1: function(){
			console.log(`${ name + " - " + price + " - " + free}`);
		},

		showInfo2: function(){
			console.log(`${ name + " - " + price + " - " + free}`);
		},

		showInfo3: function(delimiter){
			console.log(`${ name + delimiter + price + delimiter + free}`);
		}
	}
}

var myCourse = getCourse("ES6", 20, false);
myCourse.showInfo3(" ++++++ ");
console.log(myCourse);

/* ==================== Computed Property Name ==================== */
let ganBien = "supp_";
let boo = {
	[ganBien + "chrom"]: true,
	[ganBien + "ie"]: true,
	[ganBien + "firefox"]: false
}
console.log(boo);