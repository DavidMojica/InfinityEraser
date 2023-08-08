var stars = document.getElementById('stars');
var moon = document.getElementById('moon');
var mountains_behind = document.getElementById('mountains_behind');
var text = document.getElementById('text');
var btn = document.getElementById('btnh');
var mountains_front = document.getElementById('mountains_front');
var header = document.querySelector('heaedr');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.2 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

});