console.log("Hello!")

$(document).ready(function() {

  $('#new-thing').click(function() {
    zip = $('#inlineFormInput').val()
    $('#modalBoom').val(zip)

  })

  $('#sub-button').click(function() {
    console.log("submitted");
  })

})
