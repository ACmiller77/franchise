console.log("Hello!")

$(document).ready(function() {

  $('#first-thing').click(function() {
    zip = $('#inlineFormInput').val()
    $('#modalZip').val(zip)
  })

})
