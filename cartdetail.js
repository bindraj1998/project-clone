
var itemaddedtocard=JSON.parse(localStorage.getItem("productlist")) 
var total=itemaddedtocard.reduce(function(sum,elem,index,arr){
   return sum+Number(elem.Price) 
   console.log(total)
},0)

var length=itemaddedtocard.length
var btn1=document.createElement("button")
btn1.innerText="Go to payment"
// var btn2=document.createElement("button")
// btn2.innerText="Remove"
document.querySelector("#con").append(btn1)
document.querySelector("h2").innerText=`total rupees ${total} total item ${length}`
itemaddedtocard.map(function(elem,index){



    var box=document.createElement("div")
var img=document.createElement("img")
var name1=document.createElement("h4")

var star=document.createElement("button")
star.setAttribute("id","button")

var price=document.createElement("p")
var shope=document.createElement("h2")
shope.setAttribute("id","shope")
var innerdiv=document.createElement("div")
innerdiv.setAttribute("class","inner")
var btn2=document.createElement("button")
btn2.innerText="Remove"
innerdiv.append(name1,star)
var div=document.createElement("div")
div.setAttribute("id","carddiv")
div.append(shope,btn2)
img.src=elem.imgUrl;
name1.innerText=elem.name;
star.innerText=elem.rating;
price.innerText=elem.Price;
shope.innerText="Free shipping"
box.append(img,innerdiv,price,div)
document.querySelector("#container").append(box)



 btn1.addEventListener("click",function(){
 payment(elem) 
 })
btn2.addEventListener("click",function(){
  removeitem(elem,index)  
})
 })
 function payment(elem){

 window.location.href="checkout.html"
 }
function removeitem(elem,index){

    itemaddedtocard.splice(index,1) 
     localStorage.setItem("productlist",JSON.stringify(itemaddedtocard))
      window.location.reload()
}
document.querySelector(".mb").addEventListener("click",gotohome);
function gotohome(){
    window.location.href="home.html";
}