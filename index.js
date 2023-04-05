
for (let i = 0; i<document.querySelectorAll(".drum").length; i++){



document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML){
    case "w":
        var audio = new Audio('/sounds/crash.mp3');
        audio.play();


    break;

    case "a":
        var audio = new Audio('/sounds/kick-bass.mp3');

    break;

    


}

}