const menuJs = document.querySelector('.menu');
const navJs = document.querySelector('nav');
const linkJs = document.querySelectorAll('.nav-link');
const mainJs = document.querySelector('main')
const domainJs = document.querySelector('.domain-name');
const descriptionJs = document.querySelector('.domain-description');
const bannerJs = document.querySelector('.banner-img');

// navBar
menuJs.addEventListener('click', () => {
    menuJs.classList.toggle('menu-rotate');
    if (menuJs.classList.contains('menu-rotate')) {
        menuJs.innerHTML = 'close';
    } else {
        menuJs.innerHTML = 'menu';
    }
    navJs.classList.toggle('nav-bar');
});

linkJs.forEach(link => link.addEventListener('click', () => {
    navJs.classList.toggle('nav-bar');
    menuJs.innerHTML = 'menu';
}))
mainJs.addEventListener('click', () => {
    navJs.classList.add('nav-bar');
    menuJs.innerHTML = 'menu';
})

// homeCarousel
const domainName = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Machine Learning'
]

const domainDescription = [
    "In this domain, we concentrate on developing and maintaining websites to solve real time problems. For any website, it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
    'Mobile app development has been steadily growing, in revenues and jobs created. In this domain and all others, we encourage all to keep practising and be their best selves.',
    'In this domain, We provide designing team who with their apex of creativity immerse themselves into fantasy and fiction and pour out the elegance.',
    'Mobile app development has been steadily growing, in revenues and jobs created. In this domain and all others, we encourage all to keep practising and be their best selves.'
]

const bannerImgs = [
    './assets/web-dev.svg',
    './assets/app-dev-banner.svg',
    './assets/ux-ui-banner.svg',
    './assets/ml-banner.svg'
]
let i = 0;

homeChange = () => {
    domainJs.innerHTML = domainName[i];
    descriptionJs.innerHTML = domainDescription[i];
    bannerJs.src = bannerImgs[i];
}
timerId  = () => {
    setInterval(homeChange, 1000);
    i++;
    if(i === 4){
        clearInterval(homeChange);
        i = 0;
    }
}
setInterval(timerId, 4000)