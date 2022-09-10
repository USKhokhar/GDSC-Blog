const menuJs = document.querySelector('.menu');
const navJs = document.querySelector('nav');
const domainJs = document.querySelector('.domain-name');
const descriptionJs = document.querySelector('.domain-description');
const bannerJs = document.querySelector('.banner-img');

let domainName = [
    'App Development',
    'UI/UX Design',
    'Machine Learning'
]

let domainDescription = [
    'Mobile app development has been steadily growing, in revenues and jobs created. In this domain and all others, we encourage all to keep practising and be their best selves.',
    'In this domain, We provide designing team who with their apex of creativity immerse themselves into fantasy and fiction and pour out the elegance.',
    'Mobile app development has been steadily growing, in revenues and jobs created. In this domain and all others, we encourage all to keep practising and be their best selves.'
]

let bannerImgs = [
    './assets/app-dev-banner.svg',
    './assets/ux-ui-banner.svg',
    './assets/ml-banner.svg'
]

menuJs.addEventListener('click', () => {
    menuJs.classList.toggle('menu-rotate');
    if (menuJs.classList.contains('menu-rotate')) {
        menuJs.innerHTML = 'close';
    } else {
        menuJs.innerHTML = 'keyboard_arrow_down';
    }
    navJs.classList.toggle('nav-bar');
});
