document.querySelector("form").addEventListener("submit",indata);
var arr=JSON.parse(localStorage.getItem("userdata")) || [];
function indata(){
    event.preventDefault();
    var obj=
    {
        maile : document.querySelector("#mailed").value,
        passe : document.querySelector("#pswd").value,
        cpasse : document.querySelector("#cpswd").value
    }
    if(obj.passe==obj.cpasse)
    {
    arr.push(obj);
    localStorage.setItem("userdata",JSON.stringify(arr));
    window.location.href="login.html"
    }
    else
    {
        alert("Password is not Matching!")
    }
}