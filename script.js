//DOM variables
let btn = document.querySelector('#btn-change-background');
let body = document.querySelector('body');

//Array of backgrounds to change to
let backgrounds = ['url(/img/pic_1.jpg)','url(/img/pic_2.jpg)','url(/img/pic_3.jpg)','url(/img/pic_4.jpg)','url(/img/pic_5.jpg)'];
let currentImageIndex;

//change background on clicking the button
btn.addEventListener('click', function(){
    //picks a random number
    let random = Math.floor(Math.random()*backgrounds.length);

  //Stop the color from repeating
    while(random == currentImageIndex){
        random = Math.floor(Math.random()*backgrounds.length);
        //console.log('background has repeated');
    }
    currentImageIndex = random;
    body.style.background = backgrounds[random];
    body.style.backgroundSize = 'cover';
    body.style.backgroundPositionY = 'center';
    body.style.backgroundrepeat = 'none';
});