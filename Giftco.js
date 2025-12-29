

const decrease = document.getElementById("dec");
const resetbtn = document.getElementById("resey");
const increase= document.getElementById("inc");
const countL = document.getElementById("countL");
let count = 0;

increase.onclick = function(){
    count++;
    countL.textContent = count;
}
decrease.onclick = function(){
    count--;
    countL.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countL.textContent = count;
}
