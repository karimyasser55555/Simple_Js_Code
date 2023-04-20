// Problem 1---------------------------------
function Show_Date()
{
var date= new Date();
document.write(date);
}

// Problem 2---------------------------------
// function Open_Window()
// {
// var id;
// setTimeout(function()
// {
// id = open("advertising.html","","width=200,height=200,screenX=100,screenY=100")
// },3000) 
// }
// function Close_Window()
// {
// id.close();
// }
var id;
function Open_Window()
{
setTimeout(function()
{
id = open("advertising.html","","width=200,height=200,screenX=100,screenY=100")
},3000) 
}
function Close_Window()
{
close();
}

// Problem 3---------------------------------
function Regex_Even()
{
var Num = parseInt(prompt("Enter Your Number To Check : "))
var regex = /\d*[02468]$/
if(regex.test(Num)==false)
{
console.log(`Your Odd Number Is ${Num}`)
alert(`Your Odd Number Is ${Num}`)
}
else
{
console.log(`Your Even Number Is ${Num}`) 
alert(`Your Even Number Is ${Num}`) 
}
}
// Problem 4---------------------------------
function Table_info(){
var Name = prompt("Enter Your Name :")
var regex1=/[a-zA-Z]/
var Name_Input = regex1.test(Name)
var Phone = prompt("Enter Your Phone :")
var regex2=/[0-9]{8}/
var Phone_Input = regex2.test(Phone)
var Mobile = prompt("Enter Your Mobile :")
var regex3=/^(010|011|012)[0-9]{8}/
var Mobile_Input = regex3.test(Mobile)
var Email = prompt("Enter Your Email :")
var regex4=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
var Email_Input = regex4.test(Email)

var color = prompt("Enter Your Favorite Color (red , green , yellow)")

if(Name_Input && Phone_Input && Mobile_Input && Email_Input )
{
document.write("Entering User Info")
document.write(`<p style="color:${color};">Welcome Dear Guest: ${Name}</p>`)
document.write(`<p style="color:${color};">Your Telephon Number Is : ${Phone}</p>`)
document.write(`<p style="color:${color};">Your Mobile Number Is : ${Mobile}</p>`)
document.write(`<p style="color:${color};">Your Email Address is : ${Email}</p>`)

var date = new Date()
document.write(`<p style="color:${color};">Today Is : ${date.getDate()}</p>`)
document.write(`<p style="color:${color};">We Are In a Month : ${date.getMonth()+1}</p>`)
document.write(`<p style="color:${color};">And Year : ${date.getFullYear()}</p>`)
document.write(`<p style="color:${color};">Today Is  : ${date}</p>`)
}
else{
    document.write("Error")
    console.log("Error")
}
}
// Problem 5---------------------------------
var array = [{Name:"Ahmed" ,degree: 50 },{Name:"Ali" ,degree: 95 }, {Name:"Mai" ,degree: 55 },{Name:"Mohamed" ,degree: 94 }];
function Array_Find(){

// A)---------------------------------
var FOUND = array.find(function(post) {
	if(post.degree > 90 && post.degree < 100)
		return true;
});
document.write(JSON.stringify(FOUND));
console.log(FOUND);
}
// B)---------------------------------
function Array_Filter(){
var newArray = array.filter(function (el)
{
return el.degree <60 
}
);
document.write(JSON.stringify(newArray));
console.log(newArray);
}
// C)---------------------------------
function Array_Push(){
var New_Student = {Name:"Salah" ,degree: 98}
array.push(New_Student)
document.write(JSON.stringify(array));
for(var s in array){
    console.log(`Student Name : ${array[s].Name} , Student Degree ${array[s].degree}`)
}
}
// D)---------------------------------
function Array_Pop(){
array.pop()
document.write(JSON.stringify(array));
for(var s of array){
    console.log(`Student Name : ${s.Name} , Student Degree ${s.degree}`)
}
}
