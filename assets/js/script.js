let products = [
    {
        category : "camera",
        image : ["https://media.istockphoto.com/id/935620656/photo/video-camera-lens.jpg?s=612x612&w=0&k=20&c=PU8weu0XaYcTbvkdtH1KiHdGh4VjfuykmNMQwCK5vj4=", "https://media.istockphoto.com/id/1257108641/photo/camera-on-sound-on.webp?b=1&s=170667a&w=0&k=20&c=TVn4fBTdgXR1KixIpEiv26aTOpocZsne45YEinre91A=", "https://media.istockphoto.com/id/1156218302/photo/top-view-of-vintage-cameras-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=q_XkEJZf-6ToHsnqarm8mUBfm2tbgxSIZkb3XXTD0kU="] 
    },
    {
        category : "mobile",
        image : ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"] 
    },
    {
        category : "laptops",
        image : ["https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww"] 
    },
    {
        category : "bags",
        image : ["https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnc3xlbnwwfHwwfHx8MA%3D%3D"] 
    },
    {
        category : "furniture",
        image : ["https://plus.unsplash.com/premium_photo-1678402545077-7a9ec2b5e5b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww", "https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"] 
    },
    {
        category : "snaks",
        image : ["https://images.unsplash.com/photo-1613462847848-f65a8b231bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha3N8ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1673580059872-b1307361f234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25ha3N8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1536974851270-95538a335a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuYWtzfGVufDB8fDB8fHww"] 
    }
];

const container = document.querySelector("#container")
const close = document.querySelector(".clos")
const img = document.querySelector(".slider img")
const total = document.querySelector(".total")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
let selectproduct;
let count = 0
let count2 = document.querySelector(".count")
products.forEach(element =>{
    container.innerHTML+=`<img src = "${element.image[0]}" id="${element.category}">`
})
const images = document.querySelectorAll(".container img")
const popup = document.querySelector(".popup")
images.forEach(element =>{
    element.addEventListener("click" , ()=>{
        popup.style.display="block"
        count=0;
        count2.innerHTML=1
        prev.style.visibility= "hidden"
        let category = element.id
        selectproduct = products.find(element =>{
            return element.category == category;
        })
        img.src =  selectproduct.image[0];
        total.innerHTML = selectproduct.image.length;
    })
})
close.addEventListener("click" , ()=>{
    popup.style.display = "none"
})
prev.addEventListener("click" , ()=>{
    if (count>0) {
        next.style.visibility= "visible"
        count--;
        count2.innerHTML=count+1
        img.src = selectproduct.image[count]
        if (count==0) {
            prev.style.visibility= "hidden"
        }
    }
})
next.addEventListener("click" , ()=>{
    if (count < selectproduct.image.length-1) {
        prev.style.visibility= "visible"
        count++;
        count2.innerHTML=count+1
        img.src = selectproduct.image[count];
        if (count==selectproduct.image.length-1) {
            next.style.visibility= "hidden"
        }
    } 
})