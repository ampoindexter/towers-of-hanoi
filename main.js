$(document).ready(init)

function init() {
  $('.disk').on('click', diskSelect);
  $('.tower').on('click', moveDisk)
}

var $selectedDisk;
var $chosenDisk;
var clickedTower;

// function thisTurn() {
//   clickedTower = '#' + $(this).attr('id');
  
//   if (!$selectedDisk) {
//     diskSelect();
//   } else {
//     moveDisk();
//   }
  
// }


function diskSelect() {
  event.stopPropagation();
  $selectedDisk = $(this).toggleClass('selected');
  // $selectedDisk.toggleClass('selected');
  // children('.disk:first-child');
  //debugger;
}

function moveDisk() {
  $selectedDisk.prependTo(this);
  $selectedDisk = "";
  $selectedDisk.removeClass('selected');
}

// function diskDrop() {
//   $('selected').appendTo(clickedTower);
  
   // if (selectedDisk.hasClass('selected')) {
  //   ('.selected').detach();
  // } else {

// function(diskMove) {
//   if ()
// }