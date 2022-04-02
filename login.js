var ud=JSON.parse(localStorage.getItem("userdata"));
document.querySelector("form").addEventListener("submit",loginpro);
function loginpro(){
    event.preventDefault();
    var lmail=document.querySelector("#maill").value;
    var lpass=document.querySelector("#passs").value;
    var stat=false;
    for(var a=0; a<ud.length; a++)
    {
        if(ud[a].maile==lmail && ud[a].passe==lpass)
        {
            window.location.href="home.html";
            stat=true;
            break;
        }
    }
    if (stat==false)
    {
        alert("Wrong Credential!");
    }
}
document.querySelector(".mb").addEventListener("click",gotohome);
function gotohome(){
    window.location.href="home.html";
}
document.querySelector(".bm").addEventListener("click",gotohome);
function gotohome(){
    window.location.href="home.html";
}
document.querySelector(".ct").addEventListener("click",gotocart);
function gotocart(){
    window.location.href="carddetails.html";
}
document.querySelector(".tc").addEventListener("click",gotocart);
function gotocart(){
    window.location.href="carddetails.html";
}