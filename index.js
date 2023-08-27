console.clear(); 
 
var box = document.getElementById('watch-container');
var black = document.getElementById('c1')
var red = document.getElementById('c2')
var purple = document.getElementById('c3')
var pink = document.getElementById('c4')
var gif = document.getElementById('gif')

var h = document.getElementById('hour')
var m = document.getElementById('minute')
var s = document.getElementById('seconds')

 
var timeBtn = document.getElementById('time');
var rateBtn = document.getElementById('rate');
 var features = document.getElementById('countdown');



 


var value = ''

rateBtn.addEventListener('click' , function() {
gif.classList.remove('hide')
features.classList.add('hide')


})



timeBtn.addEventListener('click', function() {
   
   features.classList.remove('hide')
gif.classList.add('hide')

    

})


var initialSec = s.innerHTML;
var initialMin = m.innerHTML;




setInterval(function() {
    m.innerHTML +++1
},60000)



 setInterval(function() {
    initialSec = initialSec < 60 ? initialSec: 0;

initialSec +++1

    s.innerHTML = initialSec
  
 },1000)



var bw = document.getElementById('bluewatch');

black.addEventListener('click', function() {
    
    bw.src = 'black.jpg'

}) 


red.addEventListener('click', function() {
    
    bw.src = 'red.png'

}) 

purple.addEventListener('click', function() {
    
    bw.src = 'purple.png'

})

pink.addEventListener('click', function() {
    
    bw.src = 'pink.png'

}) 

