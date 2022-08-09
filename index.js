//plays relevant sound depending on which key was pressed

function playSound(char){
  switch (char) {
    case "w":
      var audio =  new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio =  new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "s":
      var audio =  new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "d":
      var audio =  new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio =  new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "k":
      var audio =  new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "l":
      var audio =  new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    default:console.log(buttonInnerHtml);

  }
}

function buttonAnimation(char){
  var activeButton = document.querySelector("."+char);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);
}

var buttons=document.querySelectorAll("button");

//Detecting button press

for(var i =0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    var buttonInnerHtml=this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//Detecting key press

document.addEventListener("keydown",function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});
