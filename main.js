// CHANGING NAVBAR STYLE ON SCROLLING
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY > 5)
})

// FREQUENLTY ASKED QUESTIONS EVENT


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'

        }
        else{
            icon.className = 'uil uil-plus'
        }
    })
})


// NAVBAR CODES

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)