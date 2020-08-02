document.getElementById("infos").style.top = (document.innerHeight - document.getElementById("infos").offsetHeight)+"px";


function menu(){
	document.getElementById("sideBar").style.left = "0";
}
window.addEventListener("click", function(){
	if(document.getElementById("sideBar").offsetLeft >= 0){
		document.getElementById("sideBar").style.left = (-document.getElementById("sideBar").offsetWidth)+"px";
	}
}, false);

var li = document.getElementById("container_login");
li.style.left = ((window.innerWidth/2)-(li.offsetWidth/2))+"px";
var su = document.getElementById("container_signup");
su.style.left = li.offsetLeft+"px";
su.style.top = li.offsetTop+"px";

li.style.zIndex = 1;
su.style.zIndex = 0;


function login(){
	if(parseInt(li.style.zIndex) != 1){
		var liL = li.style.left;
		var suL = su.style.left;
		li.style.left = ((window.innerWidth/2)-(li.offsetWidth+100))+"px";
		su.style.left = ((window.innerWidth/2)+100)+"px";
		var i = window.setInterval(function(){
			li.style.left = liL;
			su.style.left = suL;
			li.style.zIndex = 1;
			su.style.zIndex = 0;
			window.clearInterval(i);
		}, 1000);
	}
}

function signup(){
	if(parseInt(su.style.zIndex) != 1){
		var liL = li.style.left;
		var suL = su.style.left;
		li.style.left = ((window.innerWidth/2)+100)+"px";
		su.style.left = ((window.innerWidth/2)-(su.offsetWidth+100))+"px";
		var i = window.setInterval(function(){
			li.style.left = liL;
			su.style.left = suL;
			li.style.zIndex = 0;
			su.style.zIndex = 1;
			window.clearInterval(i);
		}, 1000);
	}
}