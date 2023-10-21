//keyCheck Area________________________________
var runStart =0;
function keyCheck(event){
    
    //Enter Key Area___________________________
    if(event.which==13){
    if(runWorkerId==0){
            document.getElementById("start").style.visibility ="hidden";
            runWorkerId = setInterval(run,100);
            runStart = 1;
            runSound.play();
            backgroundSound.play();
            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
            createBlockWorkerId = setInterval(createBlock,100);
            moveBlockWorkerId = setInterval(moveBlock, 100);
        }
    }

    //Space Key Area____________________________
    if(event.which==32){
        if(runStart==1){

            if(jumpWorkerId==0){   
                clearInterval(runWorkerId);
                runSound.pause();
                //flameSound.play();
                //fantasticSound.play();
                runWorkerId=-1;   
                jumpWorkerId = setInterval(jump, 100)
                jumpSound.play();
            }
        }
    
    }
}


//Run Area______________________________________
var player=document.getElementById("player");
var runImageNumber=1
var runWorkerId=0;

var runSound = new Audio("run.mp3");
runSound.loop = true;
function run(){
     runImageNumber++;
     if(runImageNumber==9){
        runImageNumber=1;
     }
     player.src = "Run ("+runImageNumber+").png";

}








//jump Area_____________________________________
var jumpImageNumber=1;
var jumpWorkerId=0;
var playerMarginTop = 340;
var jumpSound = new Audio("jump.mp3");
function jump(){
    jumpImageNumber++; 
     
    //player High jump part start_______________________________
    if(jumpImageNumber<=7){
       playerMarginTop = playerMarginTop-30;
       player.style.marginTop = playerMarginTop+"px";

     }
     if(jumpImageNumber>=8){
        playerMarginTop = playerMarginTop+30;
        player.style.marginTop = playerMarginTop+"px";
     }
    //player High jum part stop__________________________________


    if(jumpImageNumber==13){
        jumpImageNumber=1;
        clearInterval(jumpWorkerId);

        jumpWorkerId=0;

        runWorkerId = setInterval(run,100);
        runSound.play();
        fantasticSound.pause();
    }
    player.src = "Jump ("+jumpImageNumber+").png";

}



//MoveBackground_____________________________________

var background = document.getElementById("background");
var backgroundX =0;
var backgroundWorkerId =0;
function moveBackground(){

backgroundX= backgroundX-20;
background.style.backgroundPositionX = backgroundX+"px";

}



//Score Update Area_____________________________________
var scoreWorkerId =0;
var Score = document.getElementById("score");
var newScore = 0;
function updateScore(){

    newScore = newScore+5;
    Score.innerHTML = newScore;
}


//create block Area____________________________
var createBlockWorkerId=0;
var playerMarginLeft = 600;
var blockId = 1;
function createBlock(){
    var block = document.createElement("div");
    block.className = "block";
    block.id = "block"+ blockId;
    blockId++;


    var gap = Math.random()*(1000-400)+400;
    playerMarginLeft = playerMarginLeft+gap;
    block.style.marginLeft = playerMarginLeft+"px";
    
    background.appendChild(block);


}



//Move Blocks________________________________________________
var moveBlockWorkerId= 0;

function moveBlock(){
    for(var i =1; i<=blockId;i++){
        var currentBlock = document.getElementById("block"+i);
        var currentMarginLeft = currentBlock.style.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft)-20;
        currentBlock.style.marginLeft = newMarginLeft+"px";
       //156-76
       if(newMarginLeft<=156){
        if(newMarginLeft>=76){
            if(playerMarginTop<=340){
                if(playerMarginTop>250){
                  
                       clearInterval(runWorkerId);
                       runSound.pause();
                       backgroundSound.pause();
                       clearInterval(jumpWorkerId);
                       jumpWorkerId=-1;
                       clearInterval(backgroundWorkerId);
                       clearInterval(scoreWorkerId);
                       clearInterval(createBlockWorkerId);
                       clearInterval(moveBlockWorkerId);
                       deadWorkerId = setInterval(dead, 100);
                       screamSound.play();
                       deadSound.play();
                       eveilLaughSound.play();
                       fantasticSound.pause();
                       


          }
        }
      }
    }
  }
}


//Dead function area______________________________________
var deadImageNumber = 1;
var deadWorkerId = 0;
var deadSound = new Audio("jump-.mp3");

function dead(){
    deadImageNumber++;
    if(deadImageNumber=11){
             deadImageNumber=10;
             player.style.marginTop = "340px";
             document.getElementById("gameOver").style.visibility="visible";
             document.getElementById("endScore").innerHTML = newScore;

    }
    player.src = "Dead ("+deadImageNumber+").png";

}

//restart Area
function restart(){

    location.reload();
}




//Additional sound Area____________________________________________________

//background music
var backgroundSound = new Audio("atmospheric-horror-music-1-55896.mp3");

backgroundSound.loop = true;


//flame sound Effect
var flameSound = new Audio("fire-sound-effect-designed-fire-short-swoosh-120589.mp3");

//Dead screaming sound Effect
var screamSound = new Audio("dead scream.mp3");
var screamSound = new Audio("Undertaker_-_WWE_Undertaker_Theme_Song_FilesNG.com.mp3")

//sound-of-a-fantastic-warm- Effect
var fantasticSound = new Audio("sound-of-a-fantastic-warm-fireplace-141728.mp3");

//Evil laugh Effect
var eveilLaughSound = new Audio("evil-laughing-89786.mp3")
