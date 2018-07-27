function load(){
	document.getElementById("headertop").style.padding = "250px 0 0 0";
	document.getElementById("headertop2").style.padding = "250px 0 0 0px";
	document.getElementById("headertop").style.opacity = "0.5";
	document.getElementById("headertop2").style.opacity = "1";
	document.getElementById("headertop").style.transition = "1.5s";
	document.getElementById("headertop2").style.transition = "2s";
	document.getElementById("web").style.padding = "10px 0 0 0";
	document.getElementById("web").style.transition = "2.5s";
	//
	var x = document.getElementsByClassName("end");
	for(i = 0; i < x.length; i++){
		x[i].style.padding = "0";
		x[i].style.transition = "3s";
	}
	//
	var y = document.getElementsByTagName("li");
		y[0].style.right = "0px";
		y[0].style.left = "0px";
		y[0].style.width = "0px";
		y[0].style.display = "none";
		// y[1].style.display = "block";
		// y[1].style.right = "250px";
		// y[1].style.width = "250px";
		// y[1].style.transition = "2s";

};

function loadBars(){
	document.getElementById("pts").style.width = "90%";
	document.getElementById("ill").style.width = "50%";
	document.getElementById("git").style.width = "50%";
	document.getElementById("ae").style.width = "20%";
	document.getElementById("sketch").style.width = "20%";
	document.getElementById("css").style.width = "50%";
	document.getElementById("pi").style.width = "0%";
	document.getElementById("ceo").style.width = "90%";
}
loadBars();
