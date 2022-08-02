
function playGame(str){
    const rps = ["rock", "paper", "scissors"];
    str = str.toLowerCase();
    console.log(str);
    const chooses = "Computer chooses:";
    const winmsg = "Well done! You win this round";
    const losemsg = "You lost this round. Better luck next time";
    const drawmsg = "This round was a draw, new round";
    let choice = getComputerChoice();
    if(rps.includes(str)){   
        console.log(chooses + choice);     
        if(str == "rock"){
            if(choice == "paper"){
                console.log(losemsg);
                return 0;
            }
            if(choice == "scissors"){
                console.log(winmsg);
                return 1;
            }
            else{
                console.log(drawmsg);
                return redo();
            }
        }
        else if(str == "paper"){
            if(choice == "scissors"){
                console.log(losemsg);
                return 0;
            }
            if(choice == "rock"){
                console.log(winmsg);
                return 1;
            }
            else{
                console.log(drawmsg);
                return redo();
            }
        }
        else{
            if(choice == "rock"){
                console.log(losemsg);
                return 0;
            }
            if(choice == "paper"){
                console.log(winmsg);
                return 1;
            }
            else{
                console.log(drawmsg);
                return redo();
            }
        }
    }
    else{
        console.log("Invalid input");
        
    }
}

function redo(){
    let str = getInput();
    let point = playGame(str);

}

function getComputerChoice(){
    const rps = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return rps[choice];
}
    
function getInput(){
    console.log("Rock Paper or Scissors");
    let str = prompt();
    return str;
}

let score = [0, 0];
for(let i = 0; i < 10; i++){
    console.log("Round: " + (i+1));
    let str = getInput();
    let point = playGame(str);
    if(point == 1){
        score[0]++;
    }
    else{
        score[1]++;
    }

}
console.log(score);