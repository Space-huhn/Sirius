'use strict'

// function burgerMenu() {
//     let burgerElement = document.querySelector('.header-burger');
//     let hederMenu = document.querySelector('.header-nav');
//     let bodyScrollLook = document.querySelector('body');
//     burgerElement.addEventListener('click', () => burgerElement.classList.toggle('active'));
//     burgerElement.addEventListener('click', () => hederMenu.classList.toggle('active'));
//     burgerElement.addEventListener('click', () => bodyScrollLook.classList.toggle('scroll-look'));
// }
// burgerMenu();

// let mainBackgroung = document.querySelector('.main__bg');
// let mainElement = document.documentElement
// let deviceHeith = window.innerHeight;

// mainBackgroung.style.height = deviceHeith + "px";
// console.log(deviceHeith);



// let hederMenu = document.getElementsByClassName('header-nav');
// console.log(hederMenu);

// let menuListLink = document.querySelectorAll('.nav-link');


// menuListLink.forEach(element => {
//     element.addEventListener('click', closeMenu)
//     function closeMenu() {
//         if (document.getElementsByTagName('nav').classList.contains('.active')) {
//             console.log('ok');

//             //.hederMenu.classList.remove('active'))

//         } else {
//             console.log('nok');

//         }

//     }
// });

// console.log(menuListLink);

// let hederNav = document.querySelector('.header-nav');
// let menuList = document.querySelector('.header-nav__list');
// let menuListLink = menuList.querySelectorAll('.nav-link');
// console.log(menuListLink);
// console.log(hederNav);

// forEach((menuListLink) => {
//     menuListLink.addEventListener('click', () => hederNav.classList.remove('active'));
// })
// // for (const element of menuList) {
// //     menuListLink.addEventListener('click', () => hederNav.classList.remove('active'));
// // }


// function menuPaddingOnScroll() {
//     window.addEventListener('scroll', scrollFromTop);
//     function scrollFromTop() {
//         let scrollLenth = window.pageYOffset;
//         let header = document.querySelectorAll('.header-nav__link');
//         header.forEach(element => {
//             if (scrollLenth >= 100) {
//                 element.style.cssText = `
//                     padding: 15px 20px;
//                     transition: all 0.2s ease 0s;
//                 `;
//             } else {
//                 element.style.cssText = `
//                     padding: 31px 20px;
//                     transition: all 0.2s ease 0s;
//                 `;
//             }
//         });

//     }
// }
// menuPaddingOnScroll();

// function dinamicAdaptiveMenu() {
//     let mainScreenWidth = document.documentElement.clientWidth;
//     let menuBurger = document.querySelector('.header__nav');
//     let relatively = document.querySelector('.phone');
//     let nexElement1 = relatively.nextElementSibling;
//     let nexElement2 = nexElement1.nextElementSibling;
//     function moveElement() {
//         let viewportWidt = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//         if (viewportWidt < 768) {
//             menuBurger.append(nexElement1);
//             menuBurger.append(nexElement2);
//         } else {
//             relatively.after(nexElement2);
//             relatively.after(nexElement1);
//         }
//     }
//     window.addEventListener('resize', moveElement);
//     if (mainScreenWidth < 768) {
//         moveElement();
//     }
// }
// dinamicAdaptiveMenu();

//ibg
// let blockParent = document.querySelectorAll('.ibg');
// blockParent.forEach((element, index) => {
//     if (blockParent.length > 0) {
//         let blok = element.querySelector('img');
//         let srcPath = blok.getAttribute('src');
//         if (index == index) {
//             element.style.backgroundImage = `url('+ ${srcPath} +')`;
//         }
//         // element.style.backgroundImage = `url(${(element.querySelector('img')).getAttribute('src')})`;
//     }
// });


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

function paralaxEfect() {
    let paralaxBody = document.documentElement;
    let main = document.querySelector('.main');
    let mainLeaf = document.querySelector('.main__leaf');
    let mainRaspbery1 = document.querySelector('.main__raspbery1');
    let mainRaspbery2 = document.querySelector('.main__raspbery2');
    let mainRaspbery3 = document.querySelector('.main__raspbery3');

    let speed = 55;

    paralaxBody.addEventListener("mousemove", (e) => {

        let documentWidth = main.offsetWidth;
        let documentHeigth = main.offsetHeight;
        let xCenter = documentWidth / 2;
        let yCenter = documentHeigth / 2;

        let mouseCoordX = e.pageX / xCenter * speed;
        let mouseCoordY = e.pageY / yCenter * speed;
        let mouseScale = e.pageY / yCenter * 0.23;

        mainLeaf.style.cssText = `transform: translate(${mouseCoordX}%, ${mouseCoordY}%) rotate(170deg)`;
        mainRaspbery1.style.cssText = `transform: translate(${-mouseCoordX * 0.6}%, ${-mouseCoordY * 1}%)`;
        mainRaspbery2.style.cssText = `transform: translate(${-mouseCoordX * 0.9}%, ${-mouseCoordY * 0.2}%) rotate(90deg)`;
        mainRaspbery3.style.cssText = `transform: translate(${mouseCoordX * 1.2}%, ${-mouseCoordY * 0.4}%) rotate(190deg)`;

    });

}

paralaxEfect()





// console.log(a);





// window.addEventListener('resize', function (event) {
//     var newWidth = window.innerWidth;
//     var newHeight = window.innerHeight;
//     console.log(newWidth);
//     console.log(newHeight);
// });


/*
let secondElement = document.querySelector('.living');
let navLink = document.querySelector('.about');
navLink.addEventListener('click', () => secondElement.scrollIntoView({ behavior: 'smooth' }));
*/


