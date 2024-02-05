const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

no.addEventListener("mouseover",change);
function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    no.style.right = i+"px";
    no.style.top = j+"px";
}
