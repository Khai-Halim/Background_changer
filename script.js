//DOM variables
let btn = document.querySelector('#btn-change-background');
let body = document.querySelector('body');

//Array of backgrounds to change to
let backgrounds = ['url(img/pic_1.jpg)','url(img/pic_2.jpg)','url(img/pic_3.jpg)','url(img/pic_4.jpg)','url(img/pic_5.jpg)'];

//global variables
let currentImageIndex = 0;
let canChangePic = true;

//change background on clicking the button
btn.addEventListener('click', function(){

    if(canChangePic){
        canChangePic = false;

        //picks a random number
        let random = Math.floor(Math.random()*backgrounds.length);

        //Ensures that the next background is different to current.
        while(random == currentImageIndex){
            random = Math.floor(Math.random()*backgrounds.length);
            console.log('background has repeated');
        }
        //Changes the background image
        currentImageIndex = random;
        body.style.transition = 'all 0.7s ease-in-out';
        body.style.background = backgrounds[random];
        body.style.backgroundrepeat = 'none';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';

        
        setTimeout(function(){
            //Delays button press ability.
            canChangePic = true; 
            //stops transition animation on resizing window
            body.style.transition = '';       
        }, 800);
    }
    
});