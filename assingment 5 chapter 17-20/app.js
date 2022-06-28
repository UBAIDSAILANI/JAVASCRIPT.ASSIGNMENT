// q#1
var arr = [[],[],[]];

console.log(arr);
// q#2
var arr = [[1,9,0,2],[3,4,2,1],[8,2,3,4]];
for (var i = 0; i < arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
        document.write(arr[i][j])
    }
    document.write("</br>")
}
// q#3
var arr = [1,2,3,4,5,6,7,8,9,10];

for(var i =0; i < arr.length; i++){
    document.write(arr[i])
    document.write("<br/>")
}
// q#4
var table = +prompt("Enter the Table");
var length = +prompt("Enter the length");
for(var i =1; i <= length; i++){
    document.write(table + "x" + i + "=" + table*i + "<br/>")
}
// q#5
var fruits = [" apple", " banana", " mango"," pears", " tomato"];
for(var i = 0; i < fruits.length; i++){
    document.write(i);
    document.write(fruits[i])
    document.write("<br/>")
}
// q#6
// a
document.write("<h1>" + "Counting" + "</h1>" + "</br>");
for (var i = 1; i<=15; i++){
        document.write(i + "</br>")
    }
    // b
document.write("<h1>" + "Reverse" + "</h1>" + "</br>");
var arrNum = [1,2,3,4,5,6,7,8,9,10];
for(var i = 1; i < arrNum.length; i++){
    document.write(arrNum.reverse())
    
}
// q#7
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("what is your desire item");
var flag = false;
for (var i =0; i < bakery.length; i++){
    if (search===bakery[i]){
       
        document.write("<h1>" + (i+1) +")" + bakery[i] + " is available" + "</h1>")
        flag = true;
    }
}
    if (flag === false){
    document.write(search + "is not available" + "<br/>")}
// q#8
var arr = [24, 53, 78, 91, 12];

var min = arr[0];

for(var i = 0; i < arr.length; i++){
    if(min > arr[i]){
        // console.log("test")
        min = arr[i]
    }
}
document.write("The minimum number is " + min)
// Q#9
var arr = [34,22,54,664,32,];
var max = arr[0];
for(i=0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
document.write("The Largest number is " + max + "</br>")
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

var arr =[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20];
var fifth = (5)
for(i = 0; i <arr.length; i++){
    if(fifth === arr[4]){
        document.write(arr[i] * fifth + "<br/>")
    }
    
}


