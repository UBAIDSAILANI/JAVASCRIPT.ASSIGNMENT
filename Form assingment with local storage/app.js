var city = document.getElementById('selectCity');
var course = document.getElementById('selectCourse');
var myname = document.getElementById('name');
var father = document.getElementById('fName');
var eMail = document.getElementById('email');
var phone = document.getElementById('phone');
var cNic = document.getElementById('cnic');
var fatherNic = document.getElementById('fcnic');
var gender = document.getElementById('gender');
var dob = document.getElementById('dob');
var address = document.getElementById('address');
var qualification = document.getElementById('lastQ');
var valLocal = document.getElementById('table');

var itemStore = [];
function getValue() {
    swal({
        title: "Good job!",
        text: "Your Form has been submitted",
        icon: "success",
        button: "Ok, Thanks",
      }); 

    if (city.value === "") {
        swal("City Required", "Please Select the City");
    }
    if (course.value === '') {
        swal("Course", "Please Select the Course");
    }
    if (myname.value === '') {
        swal("Name Required", "Please write your name");
    }
    if (father.value === '') {
        swal("Required", "...Please write your Father name!");
    }
    if (eMail.value === '') {
        swal("Email Required", "...Please write Email");
    }
    if (phone.value === '') {
        swal("Phone Number Required", "...Please write Phone Number");
    }
    if (cNic.value === '') {
        swal("CNIC Required", "...Please write Nic Number");
    }
    if (gender.value === 'Select Gender') {
        swal("Gender", "Please Select the Gender");
    }
    if (dob.value === '') {
        swal("Birth Date", "Write your date of Birth");
    }
    if (address.value === '') {
        swal("Address Required", "Please Write your address");
    }
    if (qualification.value === 'Last Qualification') {
        swal("Qualification", "Please Select your Qualifiction");
    }
    console.log(name.value);
    if (name.value != "" && father.value != "" && eMail.value != "" && phone.value != "" && cNic.value != "" && gender.value != "" && dob.value != "" && address.value != "" && qualification.value != "") {
        event.preventDefault();
        itemStore.push({ "Name": myname.value, "fName": father.value, 'City': city.value, 'course': course.value, 'Email': eMail.value, 'Phone': phone.value, 'CNIC': cNic.value, 'Gender': gender.value, 'Birth_date': dob.value, 'Address': address.value, 'qualification': qualification.value })
        // var city = city.option[select.selectedIndex].text;
        localStorage.setItem('data', JSON.stringify(itemStore))
        console.log(city)
    }
document.getElementById('selectCity') ='';
document.getElementById('selectCourse') ='';
document.getElementById('name')='';
document.getElementById('fName')='';
document.getElementById('email')='';
document.getElementById('phone')='';
document.getElementById('cnic')='';
document.getElementById('fcnic')='';
document.getElementById('gender')='';
document.getElementById('dob')='';
document.getElementById('address')='';
document.getElementById('lastQ')='';
    
}
var values = localStorage.getItem('data');
if (values){
    itemStore = JSON.parse(values);
    document.getElementById('delAll').innerHTML = `<button onclick="delAll()">Delete All</button>`;
}
function loadValues(){
    valLocal.innerHTML = `
    <tr>
    <th scope = "col">City</th>
    <th scope = "col">Course</th>
    <th scope = "col">Name</th>
    <th scope = "col">Father Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>CNIC</th>
    <th>Father CNIC</th>
    <th>Gender</th>
    <th>Dob</th>
    <th>Address</th>
    <th>Qualification</th>
    </tr>
    `;
    for(var i=0; i < itemStore.length; i++){
        var tr = `
        <td>${itemStore[i].City}</td>
        <td>${itemStore[i].course}</td>
        <td>${itemStore[i].Name}</td>
        <td>${itemStore[i].fName}</td>
        <td>${itemStore[i].Email}</td>
        <td>${itemStore[i].Phone}</td>
        <td>${itemStore[i].CNIC}</td>
        <td>${itemStore[i].FatherNIC}</td>
        <td>${itemStore[i].Gender}</td>
        <td>${itemStore[i].Birth_date}</td>
        <td>${itemStore[i].Address}</td>
        <td>${itemStore[i].qualification}</td>
        <td onclick='del("${i}")'><button>Delete</button></td>
        <td onclick='edit("${itemStore[i].City}","${itemStore[i].course}","${itemStore[i].Name}","${itemStore[i].fName}",
        "${itemStore[i].Email}","${itemStore[i].Phone}","${itemStore[i].CNIC}","${itemStore[i].FatherNIC}","${itemStore[i].Gender}",
        "${itemStore[i].Birth_date}","${itemStore[i].Address}","${itemStore[i].qualification}") >Edit</td>

         `;
        valLocal.innerHTML += tr;
    }

}
loadValues();
function admin(){
    window.location.href = "admin.html"
}
function del(i){
itemStore.splice(i,1);
localStorage.setItem("data", JSON.stringify(itemStore));
event.target.parentNode.remove();
loadValues();
}
function delAll(){
 valLocal.innerHTML = `<td>Documents has been deleted:</td>` 
  document.getElementById("delAll").innerHTML = `<button onclick="goback()">Go to Registration</button>`
window.localStorage.removeItem('data')
}
function goback(){
    window.location.href = "index.html"
}
function enterAdmin(){
    
}