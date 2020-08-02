


const features = [
{
	product: "Product 1",
	image: "features/display/display1.webp",
	details: "This is a test product number 1",
	price: 100,
},
{
	product: "Product 2",
	image: "features/display/display2.webp",
	details: "This is a test product number 2",
	price: 150,
},
{
	product: "Product 3",
	image: "features/display/display3.webp",
	details: "This is a test product number 3",
	price: 200,
},
{
	product: "Product 4",
	image: "features/display/display4.webp",
	details: "This is a test product number 4",
	price: 500,
},
{
	product: "Product 5",
	image: "features/display/display5.webp",
	details: "This is a test product number 5",
	price: 320,
},
{
	product: "Product 6",
	image: "features/display/display6.webp",
	details: "This is a test product number 1",
	price: 640,
},
{
	product: "Product 7",
	image: "features/display/display7.webp",
	details: "This is a test product number 1",
	price: 640,
}
];
var feature_elements = [];
var current = 0;
var ds = 1;
var interval = function(){
	if((current + ds) >= features.length || (current + ds) <= -1){
		ds *= -1;
	}
	var curr = current + ds;
	overFeature(curr);
};

var width = Math.floor(window.innerWidth*.6);
var small = "60%";
if(window.innerWidth < window.innerHeight){
	small = "80%";
}

for(var i=0; i<features.length; i++){
	var position = ((window.innerWidth/2)-(width/2)) + (width*i);
	
	var d = document.createElement("div");
	d.id = "product"+(i+1);
	
	d.style.width = width+"px";
	d.style.height = (width*.53)+"px";
	//d.style.backgroundColor = rndmRGB(0.5);
	d.style.position = "absolute";
	d.style.left = position+"px";
	d.setAttribute("onmousedown", "clicked("+(i)+")");
	d.style.transition = "left 1s";
	
	var inside = document.createElement("div");
	inside.className = "inside";
	inside.setAttribute("style", 
	"position: absolute;"+
	"left: 0px;"+
	"right: 0px;"+
	"top: 0px;"+
	"bottom: 0px;"+
	"margin: auto;"+
	"transition: width 1s, height 1s;"+
	"border: 2px white solid;"
	);
	
	if(i == current){
		inside.style.width = "100%";
		inside.style.height = "100%";
		d.style.cursor = "pointer";
	}else{
		inside.style.width = small;
		inside.style.height = small;
	}
	//inside.style.backgroundColor = rndmRGB(1);
	//inside.setAttribute("src", features[i].image);
	
	var image = document.createElement("img");
	image.setAttribute("src", features[i].image);
	image.setAttribute("style", "width: 100%; height: 100%; object-fit: contain");
	inside.appendChild(image);
	
	d.appendChild(inside);
	
	var parent = document.getElementById("features");
	parent.style.height = (width*.54)+"px";
	parent.appendChild(d);
	feature_elements[i] = [d, inside];
}

var it;
var ti = window.setTimeout(function(){
	it = window.setInterval(interval, 10000);
}, 0);

function clicked(n){
	window.clearInterval(it);
	window.clearTimeout(ti);
	ti = window.setTimeout(function(){
		it = window.setInterval(interval, 10000);
	}, 10000);
	overFeature(n);
}

function overFeature(n){
	if(current < n){
		for(var i=0; i<features.length; i++){
			var elem_left = parseInt(feature_elements[i][0].style.left.replace("px"));
			var elem_width = parseInt(feature_elements[i][0].style.width.replace("px"));
			feature_elements[i][0].style.left = (elem_left-elem_width)+"px";
			feature_elements[i][1].style.width = small;
			feature_elements[i][1].style.height = small;
			feature_elements[i][0].style.cursor = "arrow";
		}
	}else if(current > n){
		for(var i=0; i<features.length; i++){
			var elem_left = parseInt(feature_elements[i][0].style.left.replace("px"));
			var elem_width = parseInt(feature_elements[i][0].style.width.replace("px"));
			feature_elements[i][0].style.left = (elem_left+elem_width)+"px";
			feature_elements[i][1].style.width = small;
			feature_elements[i][1].style.height = small;
			feature_elements[i][0].style.cursor = "arrow";
		}
	}
	feature_elements[n][0].style.cursor = "pointer";
	feature_elements[n][1].style.width = "100%";
	feature_elements[n][1].style.height = "100%";
	current = n;
}