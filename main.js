let menuList = document.getElementById("menuList");
menuList.style.maxHeight ="0px";

function toggleMenu(){
    if(menuList.style.maxHeight =="0px"){
        menuList.style.maxHeight ="300px";
    }
    else{
        menuList.style.maxHeight ="0px";
    }
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1, .header__container p", scrollRevealOption);
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });

