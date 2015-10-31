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
}


function diskSelect() {
  $selectedDisk = $(clickedTower).children('.disk:first-child')
  $selectedDisk.addClass('selected');
  //debugger;
}

function moveDisk() {
  
}

// function diskDrop() {
//   $('selected').appendTo(clickedTower);
  
   // if (selectedDisk.hasClass('selected')) {
  //   ('.selected').detach();
  // } else {

// function(diskMove) {
//   if ()
// }