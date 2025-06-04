document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll(".nav_link");
links.forEach(link =>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        const target = link.getAttribute("data-target");
        const targetEle = document.querySelector(`.${target}`)

        if (targetEle){
            targetEle.scrollIntoView({behavior : "smooth"});
        }
    })
})
})