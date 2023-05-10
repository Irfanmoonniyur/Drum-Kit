// when clicked on screen
var element=document.querySelectorAll(".drum");
for (var i = 0; i <element.length;i++){
    element[i].addEventListener("click",function(){
        var current_button=this.innerHTML;
        makesound(current_button);
        buttonAnimation(current_button);
        

        
      

    });
}
// when keyboard id used
document.addEventListener("keydown", function(event){
    var pressedKey = event.key;
    makesound(pressedKey)
    buttonAnimation(pressedKey);
   
})


// function to create sound for two case
function  makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        default:
            console.log(current_button);
        
    }
}
function buttonAnimation(keybutton){
    var neededbutton ="."+keybutton;
    document.querySelector(neededbutton).classList.add("pressed")
    // to remove the animation after pressed 
    // setTimeout(function,time in ms)
    setTimeout(function(){
        document.querySelector(neededbutton).classList.remove("pressed")
    }, 100)}