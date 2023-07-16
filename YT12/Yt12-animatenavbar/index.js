const menu = document.querySelector('.menu');
const close = document.querySelector('#close');
const nav = document.querySelector('nav');

menu.addEventListener('click', ()=>{
        nav.classList.add('active');
});

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
});


