var photos = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"]

// var imgTag = document.querySelector("img");
// var count = 0;
var i = 0;
var x;
// var x1;
// var x2;
//------------------Next-----------------
function next()
{ 
    if(i==photos.length-1)
    {
        i=photos.length-1
        console.log(i)
    }
    else if (i<photos.length-1)
    i++;
    console.log(i)

    document.querySelector("img").src=photos[i];
}
// function next(){ 
    
//     x1= setInterval(function(){
//         count++;console.log(count)
//     if(count < photos.length){
        
//         imgTag.src = photos[count];
//         console.log(photos[count])
        
//     }
//     else{
//         clearInterval(x)
//     }
//     },500)}

// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length -1;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }

//------------------Prev-----------------
function prev(){ 
    if(i==0)
    {
        i=0;
    }
    else if(i<=photos.length)
    i--;
    
    document.querySelector("img").src=photos[i];
    }
// function prev(){ 
    
//     x2= setInterval(function(){
//         count--;console.log(count)
//     if(count <= photos.length &&count!=(-1) ){
        
//         imgTag.src = photos[count];
//         console.log(photos[count])
        
//     }
//     else{
//         clearInterval(x)
//     }
//     },500)}
//----------------SlidShow----------------
    
function SlidShow(){ 
        
    x= setInterval(function(){
        if(i==photos.length-1)
            {
                i=0;
            }
        else if (i<photos.length-1)
        i++;
        document.querySelector("img").src=photos[i];
    },500)}
// function SlidShow(){ 
        
//         x= setInterval(function(){
//             count++;console.log(count)
//             if(count >= photos.length){
//                 count = 0;console.log(count)
//                 imgTag.src = photos[count];
//                 console.log(photos[count])
//             }else{
//                 imgTag.src = photos[count];
//                 console.log(photos[count])
//             }
//         },500)}
//------------------Stop-----------------
function Stop()
{
        clearInterval(x);
}        