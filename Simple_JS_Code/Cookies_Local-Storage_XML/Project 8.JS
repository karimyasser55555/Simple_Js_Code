//<!-- ---------------Problem 1--------------- -->
//<!-- ---------------Cookies--------------- -->
function SaveData(){
var inputs = document.getElementsByTagName("input")
var date = new Date()
date.setMonth(date.getMonth()+2)

document.cookie="UserName="+inputs[0].value+";expires="+date
document.cookie="Password="+inputs[1].value+";expires="+date
}
var Header_Text = document.createElement("h3")
function GetData(){
    var SavedCookies = document.cookie
    var CookiesArr = SavedCookies.split(";")
    var Obj={}
    for(i=0;i<CookiesArr.length;i++)
    {
    var Arr =CookiesArr[i].split("=")
    Obj[Arr[0].trim()]=Arr[1]
    }

    console.log(Obj);

    Header_Text.textContent="Welcome  "+ Obj.UserName + "  Your Password Is : "+Obj.Password
    document.body.appendChild(Header_Text)
}

function DeleteData(){
    document.cookie="UserName=;expires=5/5/2009"
    document.cookie="Password=;expires=5/5/2009"
}
//<!-- ---------------Local Storage--------------- -->
function SaveInLocalStorage (){
    var UserName = document.getElementsByTagName("input")[2].value
    var Password = document.getElementsByTagName("input")[3].value
    localStorage.setItem("UserName",UserName)
    localStorage.setItem("Password",Password)
}
function GetItemFromLocalStorage(){
    var UserName = localStorage.getItem("UserName")
    var Password = localStorage.getItem("Password")
    console.log("UserName : "+UserName)
    console.log("Password : "+Password)
}
function ClearItemFromLocalStorage(){
    localStorage.clear();
}
//<!-- ---------------Problem 2--------------- -->
function boxChecked(){
    let checkBox = document.getElementById("Remember_me");
if(checkBox.checked){

    var UserName = document.getElementsByTagName("input")[4].value
    var Password = document.getElementsByTagName("input")[5].value
    localStorage.setItem("UserName",UserName)
    localStorage.setItem("Password",Password)

}
else{
    localStorage.clear();
}
}
//<!-- ---------------Problem 3--------------- -->
function GetDataById(){
var xhr = new XMLHttpRequest()
var Id = document.getElementById("UserId").value
xhr.open("Get",`https://reqres.in/api/users/${Id}`)
xhr.send()
xhr.onload = function (res) {
    var Response = JSON.parse(xhr.response)
    document.getElementById("FirstName").value = Response.data.first_name
    document.getElementById("LastName").value = Response.data.last_name
    document.getElementById("Avatar").setAttribute("src",Response.data.avatar)
}
}