console.log("Hello!")

$(document).ready(function() {

  $('#newModal').on('shown.bs.modal', function () {
    $('#modalName').trigger('focus')
})

  $('#new-thing').click(function() {
    zip = $('#inlineFormInput').val()
    $('#modalBoom').val(zip)

  })

  $('#sub-button').click(function() {
    console.log("submitted");
  })

})
