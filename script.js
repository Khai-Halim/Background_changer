let btn = document.querySelector('#btn-change-background');
let body = document.querySelector('body');

//background colors to change to
let colors = ['blue', 'green', 'yellow', 'red', 'purple'];

//change color on clicking the button
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*colors.length);
    body.style.background = colors[random];
    console.log(random);
});