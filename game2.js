'use strict';
const score0= document.querySelector('.score-0');
const score1=document.querySelector('.score-1');
const img = document.querySelector('.dice-img');
const col0 = document.querySelector('.col0');
const col1 = document.querySelector('.col1');
const active = document.querySelector('.player--active');
const hold = document.querySelector('.Hold');
const newgame = document.querySelector('.New-Game');

let c0 = document.getElementById('#c0');
let c1 = document.getElementById('#c1');
let playing=true;
c0.textContent=0;
c1.textContent=0;
score0.textContent=0;
score1.textContent=0;

img.classList.add('hidden');
const rolbtn = document.querySelector('.Roll-Dice');
console.log(`rolbtn${rolbtn}`);

let sum=0;
let activePlayer=0;
rolbtn.addEventListener('click',function()
{
    if(playing)
    {
        const r = Math.trunc((Math.random()*6))+1;
    img.classList.remove('hidden');
    img.src=`dice-${r}.png`;

    if(r!=1)
    {
        sum+=r;
        document.getElementById(`#c${activePlayer}`).textContent=sum;
    }
    else{
       // document.querySelector(`.score-${activePlayer}`).textContent=sum;

        sum=0;    
        document.getElementById(`#c${activePlayer}`).textContent=sum;
        activePlayer = activePlayer === 0?1:0;
        //active.classList.toggle('player--active');
    } 
    }
    
})

hold.addEventListener('click',function(){
    //1 add score on total on click of hold
    document.querySelector(`.score-${activePlayer}`).textContent=sum;
    if(sum>=20)
    {
        playing=false;
        document.querySelector(`.col${activePlayer}`).classList.add('player--winner');
        document.querySelector('.dice-img').classList.add('hidden');
    }
    else{
        sum=0;    
    document.getElementById(`#c${activePlayer}`).textContent=sum;
    activePlayer = activePlayer === 0?1:0;
    }  
})

newgame.addEventListener('click',function(){
    c0.textContent=0;
    c1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;
    document.querySelector(`.col${activePlayer}`).classList.remove('player--winner');

})


