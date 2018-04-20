function drawShape(){
	var mContent = document.getElementById("mContent");
	mContent.innerHTML ="";

	for(let i = 1; i<= 10; i++){
		var elmP = document.createElement("p");
		elmP.innerHTML = i;
		elmP.onclick = function(){
			alert("Gía trị: #" + i);
		}

		// i = 10
		mContent.appendChild(elmP);
	}
}

function clearShape(){
	var mContent = document.getElementById("mContent");
	mContent.innerHTML ="";
}