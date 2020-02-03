

var titleText = document.querySelector("title");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var code1 = document.querySelector(".code1");
var code2 = document.querySelector(".code2");
var colorCode = document.querySelector(".colorCode");
var body = document.getElementById("gradientbg");



function changeGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";

	code1.style.display = "block";
	code2.style.display = "block";

	colorCode.textContent = body.style.background + ";";
	code1.innerHTML = color1.value;
	code2.innerHTML = color2.value;

}

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);


