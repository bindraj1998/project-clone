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
            alert("successful");
            stat=true;
            break;
        }
    }
    if (stat==false)
    {
        alert("Wrong Credential!");
    }
}