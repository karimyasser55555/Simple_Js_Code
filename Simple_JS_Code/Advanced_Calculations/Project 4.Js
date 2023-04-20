//Problem 1
function Email()
{
var x = prompt("Enter Your Email :")
if(x.includes("@") && x.charAt(0)!= '@'&& x.charAt(x.length-1) != '@')
{
    document.write("Your Email is :"+x)
    console.log("Your Email is :"+x)
}
else
{
    document.write("Error Your Email Must Contain @ In Right Place")
    console.log("Error Your Email Must Contain @ In Right Place")
}
}
//Problem 2
function char_count() 
{
var str = prompt("Enter The Word")
var letter = prompt("Enter The Character")
var letter_Count = 0;
for (var position = 0; position < str.length; position++) 
{
if (str.charAt(position) == letter) 
{
letter_Count += 1;
}
}
document.write(letter_Count) ;
console.log(letter_Count) ;
}
//Problem 3
function Fill_Array()
{
var arr = []
arr[0] =parseInt(prompt("Enter The First Number"))
arr[1] =parseInt(prompt("Enter The Second Number"))
arr[2] =parseInt(prompt("Enter The Third Number"))
var x = parseInt(prompt("Enter The Number Of Operation 1- + 2- * 3- /"))
if(x==1)
{
document.write(arr[0]+arr[1]+arr[2]);
console.log(arr[0]+arr[1]+arr[2]);
}
else if (x==2)
{
    document.write(arr[0]*arr[1]*arr[2]);
    console.log(arr[0]*arr[1]+arr[2]);
}
else if (x==3)
{
    document.write(arr[0]/arr[1]/arr[2]);
    console.log(arr[0]/arr[1]/arr[2]);
}
else{
    document.write("Error");
    console.log("Error");
}
}
//Problem 4
function compareNumbers(a, b) {
    return a - b;
}
function Fill_Sorting()
{
var arr = []
arr[0] =parseInt(prompt("Enter The First Number"))
arr[1] =parseInt(prompt("Enter The Second Number"))
arr[2] =parseInt(prompt("Enter The Third Number"))
arr[3] =parseInt(prompt("Enter The Forth Number"))
arr[4] =parseInt(prompt("Enter The Fifth Number"))
arr.sort(compareNumbers);
document.write(arr);
console.log(arr);
}
//Problem 5
function Circle_Area() {
    var radius = prompt("Enter The radius")
    alert(radius*radius*Math.PI)
}
//Problem 6
function Square_Root() {
    var Num = prompt("Enter The Number ")
    alert("The Square Root Is : "+Math.sqrt(Num))
}
//Problem 7
function Cos_Value() {
    var Angle = prompt("Enter The Angle ")
    alert("The Cos Value Is : "+Math.cos(Angle))
}




