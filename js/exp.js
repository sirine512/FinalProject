let btn = document.getElementById("play");
console.log(btn)
let trai = document.querySelector(".trailer");
let lis = document.querySelector(".list");

btn.addEventListener("click", () => {
  if (trai.style.display === "none") {
    trai.style.display = "block";
    lis.style.display = "none";
  }
  else {
    trai.style.display = "block";
  }
});
let closeBtn = document.querySelector(".exit");

closeBtn.addEventListener("click", () => {
    trai.style.display = "none";
    if (lis.style.display === "block"){
    lis.style.display = "flex";}
    if (lis.style.display === "flex"){
      lis.style.display = "flex";}
  
});