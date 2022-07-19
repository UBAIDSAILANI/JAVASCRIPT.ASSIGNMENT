// assingment#9
// Q#1
var currentDate = new Date();
document.write(currentDate + "</br>");
// q#2
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var find = currentDate.getMonth();


document.write("Current Month: " + months[find] + "<br/>")
// Q#3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var y = currentDate.getDay();
document.write("Current Day: " + (days[y]) + "<br/>");
// q#4
var x = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var y = currentDate.getDay();
if (y === 1) {
    document.write("It's Fun day")
}
else {
    document.write("ja apna kam kar" + "<br/>")
}
// q#5
var now = new Date();
if (now.getDate() >= 0 && now.getDate()) {
    document.write("First Fifteen Days " + "<br/>")
}
else { document.write("Last Fifteen Days") }
// q#6
var mid = new Date();
var v = mid.getTime();
document.write("<h1>" + v / (1000 * 60) + "</h1>");
// Q#7
var time = new Date();
var u = time.getHours();
document.write(u)
if (u >= 12 && u <= 23) {
    document.write("it's PM" + "<br/>")
}
else { "it's AM" };
// q#8
var an = new Date("Dec 15, 2002");
// var laterDate = an.getUTCFullYear()
document.write("Later Date:" + an + "</br>")
// Q#9
var today = new Date();
var ramadan = new Date("April 2, 2022");
var msToday = today.getTime();
var msRamadan = ramadan.getTime();
var diff = msToday - msRamadan;
var result = Math.floor(diff / (1000 * 60 * 60 * 24))
document.write(result + " Days passed away since 1st Ramadan" + "<br/>");
// Q#10
var ref = new Date();
var start = new Date("Jan 01, 2022");
var msref = ref.getTime();
var msStart = start.getTime();
var dif = msref - msStart;
var resposnse = Math.ceil(dif / (1000))
document.write("On Ref Date: " + ref + "<br/>")
document.write(resposnse + "<br/>");
// q#11
var extract = new Date();
var ext2 = new Date(extract.setHours(22))
// var ext3 = 
document.write(extract + "<br/>");
document.write(ext2 + "<br/>");
// q#12
var year = new Date();
var year100 = new Date(year.setFullYear(1922))
// var ext3 = 
document.write(year + "<br/>");
document.write(year100 + "</br>");
// q#13
var age = +prompt("Enter your age")
// var birthday = new Date(age).getTime();
var today3 = new Date().getTime();
// console.log(birthday)
var diff =  today3 - age;

console.log("You are " + Math.round(diff / (1000 * 60 * 60 * 24 * 365)) + " years old")
// Q#14
document.write("<h1>" + "K.Electric Bill" + "<h1/>")
var cn = prompt("Enter the costumer Name");
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dis= new Date().getMonth()
var unitCharge = 40;
var numOfUnits = +prompt("Number of units");
var netAmount = (numOfUnits * unitCharge)
var lateCharges = (netAmount/10);
var grossAmount = (netAmount + lateCharges);
document.write("Costumer Name: " + cn+ "</br>");
document.write("Month: " + month[dis] + "</br>");
document.write("Number of Units: " + numOfUnits+ "</br>");
document.write("Amount Pay able (with in due date) " + netAmount+ "</br>");
document.write(lateCharges + "</br>");
document.write("Gross amount payable (after due date): " + grossAmount+ "</br>");






