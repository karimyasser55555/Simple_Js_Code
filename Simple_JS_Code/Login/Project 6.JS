//<!-- ---------------------- Problem 2 ----------------------- -->
function Typing_Massage()
{
    var My_Massage = 'Welcome To ITI',
    i = 0
    New_Window = window.open("","New_Window","width =500", "height= 600 ")
    Close_Window = setInterval(function()
    {
        if(i<My_Massage.length)
        {
            New_Window.document.write(My_Massage.charAt(i))
            i++
        }
        else
        {
            setTimeout(function()
            {
                clearInterval(Close_Window)
                New_Window.close()
            }
            ,1000)
        }
    }
    ,100) 
}
//<!-- ---------------------- Problem 3 ----------------------- -->
var Fade_Factor = 0.25
function Fade_Out(element)
{ element.style.opacity = 1
    var x
x = setInterval(function()
{
    element.style.opacity -= Fade_Factor
if(element.style.opacity <= 0.3)
    {
        clearInterval(x)
    }
}
,1000)
}


function Fade_In(element)
{ element.style.opacity = 0.3
    var x
x = setInterval(function()
{
    element.style.opacity =parseFloat(element.style.opacity)+ Fade_Factor
if(element.style.opacity >= 1)
    {
        clearInterval(x)
    }
}
,1000)
}
