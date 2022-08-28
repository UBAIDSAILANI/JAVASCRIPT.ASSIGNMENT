function addStyle(){
    var para = document.getElementById("para");
    document.getElementById("para").style.fontSize ="4em"

    para.className += " bold blue"
}
function readMore(){
var text = document.getElementById("text").innerHTML
    var para = document.getElementById("para")
    para.innerHTML = text;
}
function newStyle(){
    document.getElementById("plane").style.display = "none"
} 
function before(){
    var image = document.getElementById("plane");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9j34FdhLqX-x-SGgT0eyycd7tOF4mLgLCQ&usqp=CAU"
}
function newImage(){
    var image = document.getElementById("plane");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1VVICZIIS53bnpYtdD3xBAzVTI1r4axJrw&usqp=CAU"
    
}
function setImage(id, src){
   var image = document.getElementById(id);
   image.src = src
//    image.style.cssFloat = "left";

}
var parent = document.getElementById('parent');

 var apple = document.getElementsByTagName('p')
 for(var i=0; i <= apple.length; i++){
     apple[i].style.color = 'red';
     }
//  apple[0].style.fontWeight = 'bold';
//  apple[1].style.marginTop = '10px';

