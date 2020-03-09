//DOM variables
let btn = document.querySelector('#btn-change-background');
let body = document.querySelector('body');

//Array of background colors to change to
let colors = ['blue', 'green', 'yellow', 'red', 'purple'];
let currentColorIndex;

//change color on clicking the button
btn.addEventListener('click', function(){
    //picks a random number
    let random = Math.floor(Math.random()*colors.length);

  //Stop the color from repeating
    while(random == currentColorIndex){
        random = Math.floor(Math.random()*colors.length);
        //console.log('color is the same as previous');
    }
    currentColorIndex = random;
    //changes background color
    body.style.background = colors[random];
});