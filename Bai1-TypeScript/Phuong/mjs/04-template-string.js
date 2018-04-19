elm = document.getElementById('mContent')
elm.style.color = "#0174DF";

/*let name = "Typescript";
let price = 25;
//elm.innerHTML = '<div>Course name: <b>'+ name +'</b>, price: <b style="color: red">'+ price +' USD</b></div>';

elm.innerHTML = `<div>Course name: <b>${name}</b>, 
			price: <b style="color: red">${price} USD</b>
			</div>`;
*/

let todo ={
	id:169,
	name: "Play football",
	status: false
};

elm.innerHTML =`<div id="todo-${todo.id}">
					<i class="${todo.status == true ? "hidden" :"" } glyphicon glyphicon-ok"></i>
					<span class="name">${todo.name}</span>
				</div>`;