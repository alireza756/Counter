let increase = document.getElementById('increase');
let reset    = document.getElementById('reset');
let negetive = document.getElementById('negetive');
let num = 0;
increase.addEventListener('click' , function(){
    num += 1;
    let text = document.querySelector('p').innerHTML = num;
});
reset.addEventListener('click' , function(){
    num = 0;
    let text = document.querySelector('p').innerHTML = num;
})
negetive.addEventListener('click' , function(){
    num -= 1;
    let text = document.querySelector('p').innerHTML = num;
})