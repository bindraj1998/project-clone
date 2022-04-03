document.querySelector(".mb").addEventListener("click",gotohome);
function gotohome(){
    window.location.href="home.html";
}
document.querySelector("form").addEventListener("submit",gotoorder);
function gotoorder(){
  event.preventDefault();
    window.location.href="orderconfirm.html";
}