$(document).ready(init)

function init() {
  $('.tower').on('click', diskSelect);
}

function diskSelect() {
  var selectedDisk = $(this).children('.disk:first-child')
  if (selectedDisk.hasClass('selected')) {
    ('.selected').detach();
  } else {
    selectedDisk.addClass('selected');
  }
  //$(this).children('.disk:first-child').addClass('selected');
}

// function(diskMove) {
//   if ()
// }