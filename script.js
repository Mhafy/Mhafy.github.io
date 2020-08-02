
var lastScroll = 0;

var c1 = document.getElementById("sports_container");
var c2 = document.getElementById("gaming_container");

window.addEventListener("scroll", function(){
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
	c1.style["overflow-y"] = "hidden";
	c2.style["overflow-y"] = "hidden";
	if(st < c1.offsetTop+(c1.offsetHeight/2) && st+window.innerHeight > c1.offsetTop+(c1.offsetHeight/2)){
		c1.style["overflow-y"] = "auto";
		checkInside1();
	}else if(st < c2.offsetTop+(c2.offsetHeight/2) && st+window.innerHeight > c2.offsetTop+(c2.offsetHeight/2)){
		c2.style["overflow-y"] = "auto";
		checkInside1();
	}
}, false);

window.addEventListener("click", function(){
	if(document.getElementById("sideBar").offsetLeft >= 0){
		document.getElementById("sideBar").style.left = (-document.getElementById("sideBar").offsetWidth)+"px";
	}
}, false);


var cl = document.getElementById("icon");
cl.style.position = "absolute";
cl.style.top = document.getElementById("logo").offsetTop+"px";
cl.style.width = "100%";
cl.style.height = (parseInt(document.getElementById("logo").style.height.replace("px"))*.8)+"px";
cl.style["pointer-events"] = "none";

var logo = document.createElement("img");
logo.setAttribute("src", "logo.png");
logo.style.width = "100%";
logo.style.height = "100%";
logo.style["object-fit"] = "contain";
cl.appendChild(logo);
document.body.appendChild(cl);


document.getElementById("infos").style.top = (document.innerHeight - document.getElementById("infos").offsetHeight)+"px";


function menu(){
	document.getElementById("sideBar").style.left = "0";
}

function login(){
	var a = document.createElement("a");
	a.setAttribute("href", "links/sign_in/signup.html");
	a.click();
}