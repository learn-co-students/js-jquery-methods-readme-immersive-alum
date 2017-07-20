'use strict';

function fancySchmancy() {
   $('#bacon').addClass('iAmFancy')
   return $('.iAmFancy')
}

function addText(newText) {
  return $('p:first-child + p').append(newText)
}

function showDolphin() {
  $("#hidden").show()
}

function hideImage() {
  return $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000)
}

function fadeItOut() {
  $('p:first-child + p').fadeOut(0)
}

function findItByClass(selector) {
  return $(selector).hasClass("flatironLink")
}

function formValue() {
  return $('input:last').val()
}
