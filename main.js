$(document).ready(init)

function init() {
  $('.tower').on('click', moveDisk);
}

var $selectedDisk;
function moveDisk() {
  $selectedDisk = $(this).children('.disk:first-child')
  if ($selectedDisk.hasClass('selected')) {
    var chosenDisk = $selectedDisk.detach();
    debugger;
  } else {
    $(this).addClass('selected');
}

 // $('.tower').on('click', diskSelect);
  // $('.tower').on('click', diskDrop);
//   $selectedDisk = $('.selected').detach();
// }

// function diskDrop() {
//   $selectedDisk.appendTo(this);
// }
  


// function(diskMove) {
//   if ()
// }