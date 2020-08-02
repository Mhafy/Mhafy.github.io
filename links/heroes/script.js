function menu(){
	document.getElementById("sideBar").style.left = "0";
}
window.addEventListener("click", function(){
	if(document.getElementById("sideBar").offsetLeft >= 0){
		document.getElementById("sideBar").style.left = (-document.getElementById("sideBar").offsetWidth)+"px";
	}
}, false);
function login(){
	var a = document.createElement("a");
	a.setAttribute("href", "../sign_in/signup.html");
	a.click();
}

var container = document.getElementById("container");
container.style.left = ((window.innerWidth/2)-(container.offsetWidth/2))+"px";

document.getElementById("infos").style.top = (container.offsetTop+container.offsetHeight+50)+"px";


var par = document.getElementsByClassName("inside");
var width = (container.offsetWidth/5)-5;
var height = width*1.6;

var all = [
["Freya", 599, "Fighter"],["Cyclops", 399, "Mage"],["Minotaur", 399, "Tank"],["Diggie", 499, "Support"],["Fanny", 499, "Assassin"],["Roger", 499, "Fighter/Marksman"],["Aurora", 499, "Mage"],["Karrie", 499, "Marksman"],
["Hilda", 499, "Fighter/Tank"],["Angela", 499, "Support"],["Alpha", 599, "Fighter"],["Kagura", 599, "Mage"],["Lolita", 599, "Support/Tank"],["Ruby", 599, "Tank/Fighter"],["Johnson", 599, "Tank"],["Natalia", 599, "Assassin"],
["Vexana", 599, "Mage"],["Yi Sun-shin", 599, "Marksman/Assassin"],["Moskov", 599, "Marksman"],["Gatotkaca", 599, "Tank/Fighter"],["Hylos", 599, "Tank"],["Irithel", 599, "Marksman"],["Argus", 599, "Fighter"],["Harley", 599, "Mage/Assassin"],
["Lapu-Lapu", 599, "Fighter/Assassin"],["Helcurt", 599, "Assassin"],["Zhask", 599, "Mage"],["Pharsa", 599, "Mage"],["Jawhead", 599, "Fighter"],["Grock", 599, "Tank"],["Gusion", 599, "Assassin"],["X.Borg", 599, "Fighter"],
["Uranus", 599, "Tank"],["Claude", 599, "Marksman"],["Vale", 599, "Mage"],["Selena", 599, "Assassin/Mage"],["Hanabi", 599, "Marksman"],["Kaja", 599, "Fighter/Support"],["Leomord", 599, "Fighter"],["Kimmy", 599, "Marksman/Mage"],
["Hanzo", 599, "Assassin"],["Harith", 599, "Mage"],["Lunox", 599, "Mage"],["Thamuz", 599, "Fighter"],["Belerick", 599, "Tank"],["Popol and Kupa", 599, "Marksman"],["Martis", 599, "Fighter"],["Faramis", 599, "Support/Mage"],
["Ling", 599, "Assassin"],["Baxia", 599, "Tank"],["Khufra", 599, "Tank"],["Terizla", 599, "Fighter"],["Lylia", 599, "Mage"],["Minsitthar", 599, "Fighter"],["Kadita", 599, "Mage/Assassin"],["Atlas", 599, "Tank"],["Wanwan", 599, "Marksman"],
["Carmilla", 599, "Support"],["Masha", 599, "Fighter"],["Silvana", 599, "Fighter"],["Karina", 599, "Assassin"],["Khaleed", 599, "Fighter"],["Lou Yi", 599, "Mage"],["Valir", 599, "Mage"],["Chang'e", 599, "Mage"],
["Lesley", 599, "Marksman/Assassin"],["Odette", 599, "Mage"],["Lancelot", 599, "Assassin"],["Sun", 599, "Fighter"],["Aldous", 599, "Fighter"],["Granger", 599, "Marksman"],["Dyrroth", 599, "Fighter"],["Badang", 599, "Fighter"],
["Esmeralda", 599, "Mage/Tank"],["Guinevere", 599, "Fighter"],["Cecilion", 599, "Mage"],["Hayabusa", 599, "Assassin"],["Estes", 599, "Support"],["Chou", 599, "Fighter"],["Bruno", 599, "Marksman"],["Alice", 599, "Mage/Tank"],
["Bane", 599, "Fighter"],["Nana", 599, "Mage/Support"],["Layla", 599, "Marksman"],["Rafaela", 599, "Support"],["Balmond", 599, "Fighter/Tank"],["Eudora", 599, "Mage"],["Saber", 599, "Assassin"],["Tigreal", 599, "Tank"],
["Franco", 599, "Tank"],["Akai", 599, "Tank"],["Gord", 599, "Mage"],["Alucard", 599, "Fighter/Assassin"],["Clint", 599, "Marksman"],["Zilong", 599, "Fighter/Assassin"],["Miya", 599, "Marksman"]
];
var tank = [];
var fighter = [];
var assassin = [];
var marksman = [];
var mage = [];
var support = [];


var tr = document.createElement("tr");
for(var i=0; i<all.length; i++){
	var role = all[i][2].split("/");
	for(var r=0; r<role.length; r++){
		if(role[r] === "Tank"){
			tank.push(all[i]);
		}
		if(role[r] === "Fighter"){
			fighter.push(all[i]);
		}
		if(role[r] === "Assassin"){
			assassin.push(all[i]);
		}
		if(role[r] === "Marksman"){
			marksman.push(all[i]);
		}
		if(role[r] === "Mage"){
			mage.push(all[i]);
		}
		if(role[r] === "Support"){
			support.push(all[i]);
		}
	}
	
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), all[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[0].appendChild(tr);
}

tr = document.createElement("tr");
for(var i=0; i<tank.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), tank[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[1].appendChild(tr);
}	

tr = document.createElement("tr");
for(var i=0; i<fighter.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), fighter[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[2].appendChild(tr);
}	

tr = document.createElement("tr");
for(var i=0; i<assassin.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), assassin[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[3].appendChild(tr);
}

tr = document.createElement("tr");
for(var i=0; i<marksman.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), marksman[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[4].appendChild(tr);
}

tr = document.createElement("tr");
for(var i=0; i<mage.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), mage[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[5].appendChild(tr);
}

tr = document.createElement("tr");
for(var i=0; i<support.length; i++){
	if(i!=0 && i%5==0){
		tr = document.createElement("tr");
	}
	var th = document.createElement("th");
	
	var d = heroCard(Math.floor(i/5), support[i]);
	if(Math.floor(i/5) == 0){
		d.style.marginTop = "40px";
	}
	
	th.appendChild(d);
	tr.appendChild(th);
	par[6].appendChild(tr);
}





function switchPanel(n){
	for(var i=0; i<par.length; i++){
		par[i].style.display = "none";
		document.getElementsByClassName("btns")[i].style.color = "darkblue";
		document.getElementsByClassName("btns")[i].style.backgroundColor = "darkblue";
	}
	document.getElementsByClassName("btns")[n].style.color = "white";
	document.getElementsByClassName("btns")[n].style.backgroundColor = "blue";
	par[n].style.display = "block";
}

switchPanel(0);






function heroCard(i, data){
	try{
	var d = document.createElement("div");
	//d.style.left = (width*(i%5))+"px";
	//d.style.top = (height*Math.floor(i/5))+"px";
	//
	d.style.height = height+"px";
	d.style.width = width+"px";
	d.style.backgroundColor = "red";
	
	var blur = document.createElement("div");
	blur.style.position = "absolute";
	blur.style.width = width+"px";
	blur.style.height = (width+80)+"px";
	blur.style.backgroundColor = "white";
	blur.style["border-radius"] = "10px";
	blur.style["background-repeat"] = "no-repeat";
	blur.style["background-size"] = "100% 100%";
	blur.style["background-image"] = "url('icons/"+data[0]+".jpg')";
	blur.style["background-color"] = "black";
	blur.style["filter"] = "blur(5px)";
	
	var cont = document.createElement("div");
	cont.style.width = "100%";
	cont.style.height = (width+80)+"px";
	cont.style.backgroundColor = "white";
	cont.style["border-radius"] = "10px";
	
	var imgCont = document.createElement("div");
	imgCont.style.position = "absolute";
	imgCont.style.width = (width*.8)+"px";
	imgCont.style.height = (width)+"px";
	imgCont.style.marginLeft = ((width-(width*.8))/2)+"px";
	imgCont.style.top = ((height*i)+60)+"px";
	imgCont.style.border = "1px solid black";
	var image = document.createElement("img");
	image.setAttribute("src", "icons/"+data[0]+".jpg");
	image.setAttribute("style", "width: 100%; height: 100%; object-fit: contain;");
	imgCont.appendChild(image);
	cont.appendChild(imgCont);
	
	var info = document.createElement("div");
	info.style.position = "absolute";
	info.style.width = width+"px";
	info.style.top = ((height*i)+(width+60))+"px";
	info.style.height = "60px";
	
	
	var nn = document.createElement("div");
	nn.setAttribute("style", "margin-top: 20px; margin-left: "+20+"px; width: "+(width-40)+"px; height: "+((height-(width+60))/3)+"px; color: white; background-color: transparent; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;");
	nn.innerHTML = data[0];
	var pr = document.createElement("div");
	pr.setAttribute("style", "margin-left: "+20+"px; width: "+(width-40)+"px; height: "+((height-(width+60))/3)+"px; color: white; background-color: transparent; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;");
	pr.innerHTML = data[1];
	var btn = document.createElement("input");
	btn.setAttribute("type", "button");
	btn.setAttribute("value", "BUY");
	btn.style["text-shadow"] = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
	btn.style.color = "white";
	btn.style.backgroundColor = "skyblue";
	btn.style.width = "100%";
	btn.style.marginTop = "4px";
	btn.style.cursor = "pointer";
	btn.style.height = (height-((width+84)))+"px";
	btn.style["border-radius"] = "10px";
	info.appendChild(nn);
	info.appendChild(pr);
	
	cont.appendChild(info);
	
	d.appendChild(blur);
	d.appendChild(cont);
	d.appendChild(btn);
	return d;
	}catch(e){
		console.log(e);
	}
}