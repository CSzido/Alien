var i = 0;
var txt = "The World's First Multilingual Markup Language!";
var speed = 50;
setInterval(start, 5000);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function start(){
	document.getElementById("text").innerHTML = "";
    i = 0
    typeWriter()
}