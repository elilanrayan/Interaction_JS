document.addEventListener('DOMContentLoaded',function(){
    const swiper=new Swiper(".mon-slider",{
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        pagination:{
            el: ".swiper-pagination"
        },
        autoplay:{
            delay:3000
        }
    })
})


let modesombre=document.querySelector('.modesombre')
let footer=document.querySelector("footer")
let menu=document.querySelector(".main-head")

modesombre.addEventListener('click',()=>{
    if(footer.classList.contains("dark") && menu.classList.contains("dark")){
        footer.classList.remove("dark")
        menu.classList.remove("dark")
    }else{
        footer.classList.add("dark")
        menu.classList.add("dark")
    }
    
})



console.log("load")
let li=document.querySelectorAll(".tab")
console.log(li)
let div=document.querySelectorAll(".content")

li.forEach((elem)=>{
    elem.addEventListener("click",() =>{
        console.log(elem)
        li.forEach((elemtemp)=>{
            elemtemp.classList.remove("tab-active")
        })
        div.forEach((elemtemp)=>{
            elemtemp.classList.remove("active")
        })
        elem.classList.add("tab-active")
        if(elem.classList.contains("tab-qui")){
            let a= document.querySelector(".qui")
            a.classList.add("active")
        }
        if(elem.classList.contains("tab-prd")){
            let a= document.querySelector(".prd")
            a.classList.add("active")
        }
        if(elem.classList.contains("tab-pn")){
            let a= document.querySelector(".pn")
            a.classList.add("active")
        }
  
   })
})

