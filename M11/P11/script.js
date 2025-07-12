const hamburger = document.getElementById("hamburger")
const kumpulanLink = document.getElementById("nav-link")

hamburger.addEventListener('click', ()=>{
    kumpulanLink.classList.toggle('show')
    console.log("Di click");
})