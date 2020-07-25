


const features = [
{
	product: "Product 1",
	image: "features/display/display1.jpg",
	details: "This is a test product number 1",
	price: 100,
},
{
	product: "Product 2",
	image: "features/display/display2.jpg",
	details: "This is a test product number 2",
	price: 150,
},
{
	product: "Product 3",
	image: "features/display/display3.jpg",
	details: "This is a test product number 3",
	price: 200,
},
{
	product: "Product 4",
	image: "features/display/display4.jpg",
	details: "This is a test product number 4",
	price: 500,
},
{
	product: "Product 5",
	image: "features/display/display5.jpg",
	details: "This is a test product number 5",
	price: 320,
},
{
	product: "Product 1",
	image: "features/display/display1.jpg",
	details: "This is a test product number 1",
	price: 640,
}
];
var feature_elements = [];
var current = 0;

var width = Math.floor(window.innerWidth*.5);
if(window.innerWidth < window.innerHeight){
	width = Math.floor(window.innerWidth*.6);
}

for(var i=0; i<features.length; i++){
	var position = ((window.innerWidth/2)-(width/2)) + (width*i);
	
	var d = document.createElement("div");
	d.id = "product"+(i+1);
	
	d.style.width = width+"px";
	d.style.height = (width*.6)+"px";
	//d.style.backgroundColor = rndmRGB(0.5);
	d.style.position = "absolute";
	d.style.left = position+"px";
	d.style.top = "180px";
	d.setAttribute("onmouseup", "overFeature("+(i)+")");
	d.style.transition = "left 1s";
	
	var inside = document.createElement("div");
	inside.className = "inside";
	inside.style.position = "absolute";
	inside.style.left = "0px";
	inside.style.right = "0px";
	inside.style.top = "0px";
	inside.style.bottom = "0px";
	inside.style.margin = "auto";
	if(i == 0){
		inside.style.width = "100%";
		inside.style.height = "100%";
	}else{
		inside.style.width = "60%";
		inside.style.height = "60%";
	}
	inside.style.transition = "width 1s, height 1s";
	inside.style.backgroundColor = rndmRGB(1);
	
	d.appendChild(inside);
	
	document.body.appendChild(d);
	feature_elements[i] = [d, inside];
}



function overFeature(n){
	
	if(current < n){
		for(var i=0; i<features.length; i++){
			var elem_left = parseInt(feature_elements[i][0].style.left.replace("px"));
			var elem_width = parseInt(feature_elements[i][0].style.width.replace("px"));
			feature_elements[i][0].style.left = (elem_left-elem_width)+"px";
			feature_elements[i][1].style.width = "60%";
			feature_elements[i][1].style.height = "60%";
		}
	}else if(current > n){
		for(var i=0; i<features.length; i++){
			var elem_left = parseInt(feature_elements[i][0].style.left.replace("px"));
			var elem_width = parseInt(feature_elements[i][0].style.width.replace("px"));
			feature_elements[i][0].style.left = (elem_left+elem_width)+"px";
			feature_elements[i][1].style.width = "60%";
			feature_elements[i][1].style.height = "60%";
		}
	}else{
	}
	feature_elements[n][1].style.width = "100%";
	feature_elements[n][1].style.height = "100%";
	current = n;
}




function rndmRGB(a){
	var r = 0, g = 0, b = 0;
	var rndm = Math.random();
	if(rndm<.33) r = Math.floor(Math.random()*255);
	else if(rndm>=.33&&rndm<.66) g = Math.floor(Math.random()*255);
	else if(rndm>=.66&&rndm<1) b = Math.floor(Math.random()*255);
	return "rgba("+r+","+g+","+b+","+a+")";
}




function getPageWidth(){
	return Math.max(
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientHeight
	);
}