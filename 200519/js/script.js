// tam deyil

var allSec=document.querySelectorAll(".container .section")
var text=document.querySelectorAll(".container .content")

for(i=0;i<allSec.length;i++){

    allSec[i].addEventListener("click",function(){

        
           
   
if(this.children[0].children[0].children[0].classList.contains("fa-plus")){
   
    this.children[0].children[0].children[0].classList.replace("fa-plus","fa-minus")
}else{
    this.children[0].children[0].children[0].classList.replace("fa-minus","fa-plus")
}

var act=document.querySelector(".active_section")
this.classList.add("active_section")
act.classList.remove("active_section")

   
var cont=this.nextElementSibling
if(cont.style.diplay!="none"){
    cont.style.display="block"
}else if(cont.style.display!="block"){
    cont.style.display="none";}




    })
    
 
}