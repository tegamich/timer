let initialSeconds = 600;
let running = false;
let timer;
let finished = false;
let stopwatchInterval;
let stopwatchSeconds = 0;
let reset;
let start;
let stopwatchMinutes = 0;

const startButton = document.querySelector('.startTimer')
const displayTime = () => {
    document.querySelector('.minutes').textContent = Math.floor(initialSeconds / 60)
    document.querySelector('.seconds').textContent = initialSeconds % 60
}
 

 
displayTime();

const timerBtn = document.querySelector('#timer')
const stopwatchBtn = document.querySelector('#stopwatch')

const setTimer = (e) => {
    document.querySelector('.startTimer').textContent = 'Start'
    start = (e) => {
        if (finished) {
            
            return
        }
        const text = e.target.textContent;
        e.target.textContent = text === 'Start' ? 'Stop' : 'Start';
        if(running) {
            clearInterval(timer)
            running = false;
            return
           }
    
           running = true;
     timer = setInterval(() => {
       
       
        initialSeconds--
       
        displayTime()
        if (initialSeconds === 0) {
            clearInterval(timer);
            finished = true;
            e.target.textContent = 'Ok'
        }
    }, 1000)
    }
    reset = (e) => {
        initialSeconds = 600;
        running = false;
        displayTime();
        startButton.textContent = 'Start';
        finished = false;
        clearInterval(timer)
        
        }
        

    timerBtn.style.borderBottom = '1px solid white'
    stopwatchBtn.style.borderBottom = '';
    displayTime();
}
const displayStopwatch = () => {
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
}

const setStopwatch = (e) => {
   document.querySelector('.startTimer').textContent = 'Start'
    start = (e) => {
        const text = e.target.textContent;
        e.target.textContent = text === 'Start' ? 'Stop' : 'Start';
        if(running) {
            clearInterval(stopwatchInterval)
            running = false;
            return
        }
        running = true
        stopwatchInterval = setInterval(()=> {
        stopwatchSeconds++;
        if(stopwatchSeconds === 60) {
            stopwatchSeconds = 0;
            stopwatchMinutes++
        }
        document.querySelector('.seconds').textContent = stopwatchSeconds;
        document.querySelector('.minutes').textContent = stopwatchMinutes
        }, 1000)
    }
    reset = (e) => {
        clearInterval(stopwatchInterval)
        displayStopwatch();
        stopwatchSeconds = 0;
        stopwatchMinutes = 0;
        running = false
        document.querySelector('.startTimer').textContent = 'Start'
    }
    stopwatchBtn.style.borderBottom = '1px solid white';
    timerBtn.style.borderBottom = '';
    displayStopwatch();
}
