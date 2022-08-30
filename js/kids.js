const arrows = document.querySelectorAll(".arrow");
const list= document.querySelectorAll("#movieKids");
let arrowsMin = document.querySelectorAll(".arrowOne");

arrows.forEach((arrow,i)=>{
    const number=list[i].querySelectorAll(".newImg").length;
    let count=0;
arrow.addEventListener("click",function(){
    count++;
    const ratio = Math.floor(window.innerWidth / 270);
    if ((number-count-5+(4 - ratio))>=0){
    list[i].style.transform = `translateX(${list[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
}else{list[i].style.transform = "translateX(0)"
    count=0}
});
})
arrowsMin.forEach((arrow,i)=>{
    const number=list[i].querySelectorAll(".newImg").length;
arrow.addEventListener("click",function(){
list[i].style.transform = "translateX(0)";

});
})
