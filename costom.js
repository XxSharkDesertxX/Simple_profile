const ul = document.querySelector(".header__ul");
const item = document.querySelectorAll("li");
let counter=0;

const changeCurrent=()=>{
    item.forEach((i)=>{
        i.classList.remove("show");
    });
    counter++;
    if(counter>item.length -1    )counter=0;
    item[counter].classList.add("show");
};
setInterval(()=>ul.classList.add("w-100"),2000);
setInterval(()=>{
    changeCurrent();
    ul.classList.remove('w-100');
},4000);


const icons = document.querySelector(".icon");
const icon = document.querySelector(".icon i");
const moveSide=document.querySelector(".header_sidebar");

icons.addEventListener("click",function () {
    if(icon.className=="fa fa-bars"){
        icon.className="fa fa-times";
        moveSide.style.left="0";
    }else{
        icon.className="fa fa-bars";
        moveSide.style="-20%";
    }
});