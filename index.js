// document.querySelector(".set .w").addEventListener("click", function(){alert("w got clicked")});
// document.querySelector(".set .a").addEventListener("click", function(){alert("a got clicked")});
// document.querySelector(".set .s").addEventListener("click", function(){alert("s got clicked")});
// document.querySelector(".set .d").addEventListener("click", function(){alert("d got clicked")});
// document.querySelector(".set .j").addEventListener("click", function(){alert("j got clicked")});
// document.querySelector(".set .k").addEventListener("click", function(){alert("k got clicked")});
// document.querySelector(".set .l").addEventListener("click", function(){alert("l got clicked")});

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
  document.addEventListener("keydown", function(e) {

    // var buttonInnerHTML = this.innerHTML;

    makeSound(e.key);
    buttonAnimation(e.key);
  });

}
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}
function buttonAnimation(currentkey){
  document.querySelector("." + currentkey).classList.add("pressed");
  setTimeout(function(){document.querySelector("." + currentkey).classList.remove("pressed");}, 100);
  
}