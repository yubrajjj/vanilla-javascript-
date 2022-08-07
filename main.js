const colors=["red" ,"green","blue","white","cyan" ,"darkgreen","pink","violet","wheat" ,"gary","magenta","maroon"];
var btn=document.getElementById("btn");
var color=document.querySelector(".color");
btn.addEventListener("click", function(){
var RandomNumber = getrandomnumber();
console.log(RandomNumber);
document.body.style.backgroundColor=colors[RandomNumber];
color.innerHTML=colors[RandomNumber];


});

function getrandomnumber(){
    return Math.floor( Math.random()*colors.length);

}