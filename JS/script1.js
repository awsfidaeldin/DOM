var div = document.createElement("div");
div.classList.add("resume");
var link = document.createElement("a");
link.setAttribute("href","index.html");
link.textContent ="Main Page";
div.appendChild(link);
var header = document.querySelector("header");
header.appendChild(div);

var div = document.createElement("div");
div.classList.add("resume");
var link = document.createElement("a");
link.setAttribute("href","bio.html");
link.textContent ="Full Resume";
div.appendChild(link);
var header = document.querySelector("header");
header.appendChild(div);

var div = document.createElement("div");
div.classList.add("contact");
var link = document.createElement("a");
link.setAttribute("href","form.html");
link.textContent ="Contact Me";
div.appendChild(link);
var header = document.querySelector("header");
header.appendChild(div);




var para = document.createElement("p");
var node = document.createTextNode("For any enquiries, please contact me through my DU email aws.fidael-din@du.edu");
para.appendChild(node);
var element = document.getElementById("ft");
element.appendChild(para);

