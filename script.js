
let cart=[];
let total=0;

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";
loader.style.pointerEvents="none";

setTimeout(()=>loader.remove(),800);

}

});

const slides=document.querySelectorAll(".slide");
let current=0;

if(slides.length){

setInterval(()=>{

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

},3000);

}

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.onclick=function(){

const card=this.parentElement;

const name=card.dataset.product||card.dataset.name;

const size=card.querySelector(".size").value;

const price=parseInt(card.querySelector(".price").innerText.replace(/\D/g,""));

cart.push({name,size,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert(name+" ("+size+") added.");

};

});

function filterTeam(team){

document.querySelectorAll(".card").forEach(card=>{

if(team==="all"||card.dataset.name.includes(team))

card.style.display="block";

else

card.style.display="none";

});

}

const list=document.getElementById("cart-items");

if(list){

cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.forEach(item=>{

total+=item.price;

const li=document.createElement("li");

li.innerHTML=`${item.name} - ${item.size} - UGX ${item.price.toLocaleString()}`;

list.appendChild(li);

});

document.getElementById("total").innerText="Total: UGX "+total.toLocaleString();

}
document.getElementById("themeBtn").onclick=()=>{

document.body.classList.toggle("dark");

};