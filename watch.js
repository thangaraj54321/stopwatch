const resetButton = document.getElementById('resetButtonas');
const StartButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');

StartButton.addEventListener('click', Start)
resetButton.addEventListener('click',reset)
pauseButton.addEventListener('click',pause)

let interval = null
let millisecond = 0
let second = 0
let minute = 0
let hour = 0

function Start(){
    interval = setInterval(() => {
        millisecond 
        console.log(millisecond)
        
    },10)
}
function pause(){

}
function reset(){

}