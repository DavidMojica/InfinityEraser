var btnL = document.getElementById('btnL');
var light = document.getElementById('light');

btnL.addEventListener('click',function(){
    btnL.classList.toggle("active");
    light.classList.toggle("on");
});