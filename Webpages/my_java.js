//Get the container elememnt
var buttonContainer = document.getElementById("navibar");

//Get all buttons with id button inside the container
var buttons = buttonContainer.getElementById("button");

//Add active class to the current button (highlight it)
for (var i = 0; i < buttons.length; i ++){
    buttons[i].addEvenetListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}