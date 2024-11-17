let gamesquence=[];
let usersequence=[];
let highscore=[];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
    }
})

let btns = ["yellow", "green", "red", "purple"];
function gameflash(btn) {
    btn.classList.add("gameflesh");
    setTimeout(function () {
        btn.classList.remove("gameflesh");
    }, 500);
}
function userflash(btn) {
    btn.classList.add("userflesh");
    setTimeout(function () {
        btn.classList.remove("userflesh");
    }, 500);
}
function higestscore(){
    highscore.push(`${level}`);
    let hs=highscore[highscore.length-1];
}

function levelup() {
    usersequence=[];
    level++;
    h2.innerText = `Level ${level}`

    let randinx = Math.floor(Math.random() * 3);
    let randcolor = btns[randinx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gamesquence.push(randcolor);
    console.log(gamesquence);
    
    gameflash(randbtn);

}
function cheackans(indx){
    if(usersequence[indx]==gamesquence[indx])
    {
        if(usersequence.length==gamesquence.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`game over:<b> your score was ${level} </b>press any key to restart the game`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },500);
        higestscore();
    }
}
function reset(){
    gamesquence=[];
    started=false;
    level=0;
}
function btnpress() {
    console.log(this);
    let btn = this
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    usersequence.push(usercolor);
    console.log(usersequence);
    cheackans(usersequence.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
