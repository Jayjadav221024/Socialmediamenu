let buttondrop = document.getElementById('button');
let dropdown = document.getElementById('dropdown');
var option = document.querySelectorAll('p');
let aroow = document.getElementById('arrowicon');


function show() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "block";
    }
    aroow.classList.toggle("rotate");
}
for ( list of option) {
    list.onclick = function () {
        buttondrop.innerHTML = this.textContent;
        console.log("touch");
         dropdown.style.display = "none";
    }
}