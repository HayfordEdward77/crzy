// Show Navbar
const showNavbar =(toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that the variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            //show Navbar
            nav.classList.toggle('show')
            //change icon
            toggle.classList.toggle('bx-x')
            //add padding to body
            bodypd.classList.toggle('body-pd')
            //add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }

}

showNavbar('header-toggle','nav-bar','body-pd', 'header');

// Link active
const linkColor = document.querySelectorAll('.nav__link');

function colorLink(){
    if(linkColor){
        linkColor.forEach (l => l.classList.remove('active'))
        this.classList.add('active')
    }
};

linkColor.forEach( l => l.addEventListener('click',colorLink));


// ==============================================================
//                          Slide Animation
// ==============================================================
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.3, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


// ==============================================================
//                          Cursor Animation
// ==============================================================
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');
let quote = document.querySelectorAll('.quotes');

window.addEventListener("mousemove",cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link =>{
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
});

// quote.forEach(Text => {
//     Text.addEventListener("mouseleave", () => {
//         mouseCursor.classList.remove("invertcur");
//     });
//     Text.addEventListener("mouseover", () => {
//         mouseCursor.classList.add("invertcur");
//     });
// });








