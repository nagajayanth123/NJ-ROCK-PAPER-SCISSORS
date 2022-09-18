const rockbutton=document.getElementById("rock");
const paperbutton=document.getElementById("paper");
const scissorbutton=document.getElementById("scissor");
const resultarea=document.getElementById("result");
const yourscrhtml=document.getElementById("yourscore");
const compscrhtml=document.getElementById("compscore");

let yrscr=0,cmpscr=0;

function gamengine(yourmove){
    const moves=["rock","paper","scissors"];
    const computermove=moves[Math.floor(Math.random()*3)];
    console.log(yourmove,computermove);
    resultarea.innerHTML=`You picked ${yourmove} and computer picked ${computermove}`;
    if(yrscr===15 || cmpscr===15)
    {
        if(yrscr>cmpscr)
        resultarea.innerHTML=`CONGRATS! YOU HAVE WON THE GAME.LET'S START WITH A NEW GAME.`;
        else
        resultarea.innerHTML=`SORRY! YOUR OPPONENT HAS WON THE GAME.LET'S START WITH A NEW GAME.`;
        yrscr=0;
        cmpscr=0;   
    }

    else if(yourmove==="rock"){
        if(computermove==="paper")
        cmpscr++;
        else if(computermove==="scissors")
        yrscr++;
        else
        resultarea.innerHTML=`You both picked rock`;
    }
    else if(yourmove==="paper"){
        if(computermove==="scissors")
        cmpscr++;
        else if(computermove==="rock")
        yrscr++;
        else
        resultarea.innerHTML=`You both picked paper`;
        
    }
    else{
        if(computermove==="rock")
        cmpscr++;
        else if(computermove==="paper")
        yrscr++;
        else
        resultarea.innerHTML=`You both picked scissors`;
    }
    yourscrhtml.innerHTML=`${yrscr}`;
    compscrhtml.innerHTML=`${cmpscr}`;
}

rockbutton.addEventListener("click",() =>{
    console.log("You clicked Rock");
    gamengine("rock");
});

paperbutton.addEventListener("click",() =>{
    console.log("You clicked Paper");
    gamengine("paper");
});

scissorbutton.addEventListener("click",() =>{
    console.log("You clicked scissor");
    gamengine("scissors");
});