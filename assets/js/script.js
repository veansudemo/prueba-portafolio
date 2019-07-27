$(function() {
  /*tooltip */
  $('[data-toggle="tooltip"]').tooltip()

  /*Modarl*/
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
  })


});
