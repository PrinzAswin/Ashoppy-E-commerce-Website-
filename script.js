const bar = document.getElementById('bar');
const close = document.getElementById('main-home');
const close1 = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if (close1) {
    close1.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}