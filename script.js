let themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// ===============---------- Header & Navbar ----------=============== //


let moreContainer = document.getElementById("moreContainer");
let moreMenu = document.getElementById("moreMenu");
let navDropdown = document.querySelectorAll(".nav-dropdown");

// Hamburger Menu
moreMenu.addEventListener("click", function () {
    moreContainer.classList.add("active");
});
moreContainer.addEventListener("mouseleave" , function(){
    moreContainer.classList.remove("active")
})

// Dropdown Hover
navDropdown.forEach(function (dropdown) {
    
    dropdown.addEventListener("mouseenter", function () {
        dropdown.open = true;
    });
    dropdown.addEventListener("mouseleave", function () {
        dropdown.open = false;
    });

});



// ===============---------- Hero Section ----------=============== //


let heroSlide = document.querySelectorAll(".hero-slide")
let currentSlide = 0

function showSlide(){
    heroSlide[currentSlide].classList.remove("active")
    currentSlide++
    if(currentSlide >= heroSlide.length){
        currentSlide = 0
    }
    heroSlide[currentSlide].classList.add("active")
}
setInterval(showSlide, 2500);



// ===============---------- About Section ----------=============== //


let aboutSection = document.querySelector(".about-section")

let aboutObserver = new IntersectionObserver((data) => {
    data.forEach((entry) => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("show")
            aboutObserver.unobserve(aboutSection);
        }
    })
},{
    threshold: 0.2
})

aboutObserver.observe(aboutSection);



// ===============---------- Programs Section ----------=============== //


let programsSection = document.querySelector(".programs-section")

let programsObserver = new IntersectionObserver((data)=>{
    data.forEach((entry)=>{
        if(entry.isIntersecting){
            programsSection.classList.add("show")
            programsObserver.unobserve(programsSection)
        }
    })
},{
    threshold: 0.1
})

programsObserver.observe(programsSection)


// ===============---------- Franchise Section ----------=============== //


let franchiseSection = document.querySelector(".franchise-section")

let franchiseObserver = new IntersectionObserver((data) => {
    data.forEach((entry) => {
        if(entry.isIntersecting){
            franchiseSection.classList.add("show")
            franchiseObserver.unobserve(franchiseSection)
        }
    })
},{
    threshold: 0.2
})

franchiseObserver.observe(franchiseSection)



// ===============---------- Branch Section ----------=============== //


let branchSection = document.querySelector(".branch-section")

let branchObserver = new IntersectionObserver((data)=>{
    data.forEach((entry)=>{
        if(entry.isIntersecting){
            branchSection.classList.add("show")
            branchObserver.unobserve(branchSection)
        }
    })
},{
    threshold : 0.2
})

branchObserver.observe(branchSection)



// ===============---------- Stats Section ----------=============== //


let statsSection = document.querySelector(".stats-section")

let statsObserver = new IntersectionObserver((data)=>{
    data.forEach((entry)=>{
        if(entry.isIntersecting){
            statsSection.classList.add("show")
            statsObserver.unobserve(statsSection)
        }
    })
},{
    threshold:0.3
})

statsObserver.observe(statsSection)



// ===============---------- Footer Section ----------=============== //


let mainFooter = document.querySelector(".main-footer")

let mainObserver = new IntersectionObserver((data)=>{
    data.forEach((entry)=>{
        if(entry.isIntersecting){
            mainFooter.classList.add("show")
            mainObserver.unobserve(mainFooter)
        }
    })
},{
    threshold:0.2
})

mainObserver.observe(mainFooter)