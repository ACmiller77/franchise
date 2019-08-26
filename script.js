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

  $('#form-quote').submit(function(e) {
    e.preventDefault();
    formSubmit(e.currentTarget.name);
  });

  function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  var url = 'https://script.google.com/macros/s/AKfycbzHZbXwOD88U7mbeYhpyPULIuT2agoTq8QfPMYBP-Kb4mJA-TI/exec'; // get this url

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}

})
