// Problem 1 :
function sum()
{
var y =parseInt(prompt("Enter First Number :"))
var x =parseInt(prompt("Enter Second Number :"))
console.log(y+x) ;
document.write(y+x) ;
}
// Problem 2 :
function lessThan100()
{
var y =parseInt(prompt("Enter First Number :"))
var x =parseInt(prompt("Enter Second Number :"))
    if(x+y <100)
    {
        console.log(true)
        document.write(true)
    }
    else if (x+y > 100)
    {
        console.log(false)
        document.write(false)
    }
    else
    {
        console.log("Error")
        document.write("Error")
    }
}
// Problem 3 :
function stringInt()
{
var x =parseInt(prompt("Enter Number :"))
console.log(x)
document.write(x)
}
// Problem 4 :
function Star()
{
var x =parseInt(prompt("Enter Numbers Of Stars :"))
for(var i = 0 ; i <= x ; i++)
{
    for(var j = 0 ; j<i ;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}
}
function Explain_For_Loop()
{
    var x =parseInt(prompt("Enter Numbers Of Stars :"))
    for (i = 0; i <= x; i++) {
        document.write("The number is i = " + i +  "<br>") ;
        for (j = 0; j < i; j++) 
            {
            document.write("The number is i = " + i + " and j = " + j + "<br>") ;
            }
    }
}    