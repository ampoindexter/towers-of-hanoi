$(document).ready(init)

function init() {
  $('.tower').on('click', thisTurn);
}

var $selectedDisk;
var $chosenDisk;
var clickedTower;

function thisTurn() {
  clickedTower = '#' + $(this).attr('id');
  diskSelect();
  //debugger;
}


function diskSelect() {
  $selectedDisk = $(clickedTower).children('.disk:first-child')
  $selectedDisk.addClass('selected');
  $chosenDisk = $('.selected').detach();
  //debugger;
}

// function diskDrop() {
//   if ($chosenDisk) {
//     $chosenDisk.appendTo(this);
//   } else {
//     diskSelect();
//   }
// }
  
   // if (selectedDisk.hasClass('selected')) {
  //   ('.selected').detach();
  // } else {

// function(diskMove) {
//   if ()
// }