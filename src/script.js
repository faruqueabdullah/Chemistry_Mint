const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const mobileNavs = document.querySelectorAll('#mobile-navs li')

const hamburgerIcon =
    "https://cdn-icons-png.flaticon.com/512/1828/1828859.png";
const closeIcon =
    "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";

let isOpen = false;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    console.log(isOpen)
    // menuIcon.src = closeIcon;
    mobileMenu.classList.toggle('bottom-10')
    mobileMenu.classList.toggle('-bottom-[270px]')

    menuIcon.src = isOpen ? closeIcon : hamburgerIcon;

})

mobileNavs.forEach((e)=>{
    e.addEventListener("click",()=>{
        mobileMenu.classList.add('bottom-10')
        mobileMenu.classList.remove('-bottom-[270px]')
        isOpen = false
        menuIcon.src = hamburgerIcon
    })
})

// menuBtn.addEventListener("click", () => {
//     isOpen = !isOpen
//     // Toggle menu
//     if (isOpen) {
//         mobileMenu.classList.toggle("bottom-10");
//         mobileMenu.classList.toggle("-bottom-[270px]");
//     }
//     menuIcon.src = isOpen ? closeIcon : hamburgerIcon;
// });


    // var swiper = new Swiper(".mySwiper", {
    //   speed: 600,
    //   parallax: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });

    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });