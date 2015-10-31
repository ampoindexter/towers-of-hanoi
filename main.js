$(document).ready(init)

function init() {
  $('.tower').on('click', thisTurn);
}

var $selectedDisk;
var $chosenDisk;
var clickedTower;

function thisTurn() {
  clickedTower = '#' + $(this).attr('id');
  
  if (!$selectedDisk) {
    diskSelect();
  } else {
    moveDisk();
  }
  
}


function diskSelect() {
  $selectedDisk = $(clickedTower).children('.disk:first-child');
  $selectedDisk.toggleClass('selected');
  //debugger;
}

function moveDisk() {
  $selectedDisk.prependTo(clickedTower);
  $selectedDisk = "";
}

// function diskDrop() {
//   $('selected').appendTo(clickedTower);
  
   // if (selectedDisk.hasClass('selected')) {
  //   ('.selected').detach();
  // } else {

// function(diskMove) {
//   if ()
// }