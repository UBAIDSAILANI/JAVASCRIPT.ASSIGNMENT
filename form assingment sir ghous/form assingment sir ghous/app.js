function register(){
event.preventDefault()
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var alert = document.getElementById("alert");
var loader = document.getElementById("loader")

loader.style.display = "block"

setTimeout(function(){
    loader.style.display = "none"
if(password.value.length > 7){
    alert.innerHTML = "successfully registered"
    alert.style.display = "block"
    setTimeout(function (){
        alert.style.display = "none"
        
    }, 2000);
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)

    username.value = "";
    email.value ="";
    password.value ="";
}
else{
    danger.innerHTML = "Password should be atleast 8 character"
    danger.style.display = "block"
    setTimeout(function(){
        danger.style.display = 'none'
    }, 2000);

    console.log(username.value)
    console.log(email.value)
    console.log(password.value)

    username.value = "";
    email.value ="";
    password.value ="";
    
}
},1000)
}

function toggleImage(){
    var image = document.getElementById("image")
    var image = document.getElementById("image");
    console.log(image.className)
    if (image.className === "") {
        image.className += " hidden"
    } //else {
//         image.className = ""
//     }
}
function setValue(){
var name1 = document.getElementById("name1");
name1.value = "Ubaid ur Rehman"
}

function bigImage(){
        var image = document.getElementById("car");
        image.className = "big"
}
function smallImage(){
        var image = document.getElementById("car");
        image.className = "small"
}