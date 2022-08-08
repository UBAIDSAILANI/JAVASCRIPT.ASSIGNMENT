function green() {
    document.getElementById("write").style.backgroundColor = "rgb(27, 100, 27)";
}
function blue() {
    document.getElementById("write").style.backgroundColor = "rgb(78, 78, 235)";
}
function red() {
    document.getElementById("write").style.backgroundColor = "rgb(255, 0, 0)";
}
function pink() {
    document.getElementById("write").style.backgroundColor = "rgb(243, 134, 152)";
}
function yellow() {
    document.getElementById("write").style.backgroundColor = "rgb(233, 233, 60)";
}
function aqua() {
    document.getElementById("write").style.backgroundColor = "rgb(3, 117, 146)";
}
function  voilet(){
    document.getElementById("write").style.backgroundColor = "rgb(223, 88, 223)";
}
function white(){
    document.getElementById("write").style.backgroundColor = "white";
}
function expand(){
    document.getElementById("gallery").value= "Gallery";
}
function empty(){
    if(document.getElementById("write") === " ")
    alert("Please write some text");
}