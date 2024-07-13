let text = document.getElementById('text');
let moon = document.getElementById('moon');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    console.log(value);
    text.style.marginTop = value * 2.5+'px';
    moon.style.right = value * 2.5+'px';
})