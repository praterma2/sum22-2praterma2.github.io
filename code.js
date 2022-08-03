function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer = 20;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 2000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 4000)
    setTimeout(function(){
        countdownTimer = countdownTime - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 6000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 8000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 12000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 14000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 16000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 18000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 20000)
}

var wins = 0;
var losses = 0;
var ties = 0; 

function playCraps(){
    console.log("playCraps() started");
    var die1;
    var die2;
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
    //create sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11
    if(sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!!!";
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "Huzzah, You win!!!";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, You win!!!");
    } else {
        document.getElementById("crapsRes").innerHTML = "You did not lose or win. Please try again.";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
    }
    
}

function blastoffTimerV2(){
    //variables
    var countdownTimer = 1000;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 10;
    var countdownChange = 1;
    var numPoints = 1000;

    //loop
    for(var i = 0; i <= numPoints; i++){
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if(countdownTimer < halfCDT){
                document.getElementById("countdownDisplay").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }  
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)
        
    }
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}