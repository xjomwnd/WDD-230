const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};