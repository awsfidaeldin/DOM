var header = document.querySelector("header");
var p = document.createElement('p');
p.textContent = "Welcome everbody to my personal website at Denver University";
header.appendChild(p);


var para = document.createElement("p");
var node = document.createTextNode("For any enquiries, please contact me through my DU email aws.fidael-din@du.edu");
para.appendChild(node);
var element = document.getElementById("ft");
element.appendChild(para);
