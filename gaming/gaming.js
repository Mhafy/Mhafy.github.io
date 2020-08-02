const gaming = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


var parent = document.getElementById("gaming_container");

for(var i=0; i<gaming.length; i++){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	
	var container = document.createElement("div");
	container.style.border = "2px solid black";
	container.style.width = parent.offsetWidth+"px";
	container.style.height = "143px";
	
	var image = document.createElement("div");
	image.setAttribute("style", "width: 100%; height: 100%; background-color: red");
	container.appendChild(image);
	
	th.appendChild(container);
	tr.appendChild(th);
	parent.appendChild(tr);
}
