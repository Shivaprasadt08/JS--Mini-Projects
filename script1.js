let User = 0;
let Computer = 0;

 const choices = document.querySelectorAll(".choice");
  let msg = document.querySelector(".msg-container");

  let userInfo = document.querySelector("#user");
  let compInfo = document.querySelector("#Computer");

 //funtion that will generate randn value of the array
 const CompGenValue = () => {
  let container = ["rock","paper","scissor"];
  const num=Math.floor(Math.random() * 3);
  return container[num];

 };

 const drawgame = () => {
    console.log("The game was draw...!");
  msg.innerText = `game draw!! try again...`;
    msg.style.backgroundColor=" #a75fa4";
 };

 const showWinner = (userWin,userchoice,compchoice) => {
  if (userWin) {
    User++;
    userInfo.innerText = User;
   console.log("Congratulations! You Win...");
    msg.innerText = `Hrrey!.You Won...`;//${userchoice} beats ${compchoice} writing this within the ` ` showing error ;
    msg.style.backgroundColor="green";
    msg.style.color = "White";
  }
  else {
    Computer++;
    compInfo.innerText = Computer;
    console.log("OOPs!.You lose,please try again");
    msg.innerText = `OOPs!.You lose...${compchoice} beats ${userchoice}`; 
    msg.style.backgroundColor="red";
  }

 };

 const PlayGame = (userchoice) => 
 {
  console.log("User choice is :",userchoice);
  let compchoice = CompGenValue();
  console.log("computer choice is :",compchoice);



 if(userchoice=== compchoice)
 {
  //draw the game.
  drawgame();
 }
 else {
  userWin = true;
  if (userchoice === "rock")
  {
    userWin = compchoice === "paper" ? false :true;
  }
  else if(userchoice === "paper") {
    userWin = compchoice === "scissor" ? false :true;
  }
  else {
    userWin = userchoice === "rock" ? false : true;
  }
  showWinner(userWin,userchoice,compchoice);
 }
};
 

 choices.forEach((choice) => {
     //console.log(choice);
     choice.addEventListener("click",() =>
     {
      const userchoice=choice.getAttribute("id");
      //console.log("choice was clicked",userchoice);
      PlayGame(userchoice);
     });
 });


