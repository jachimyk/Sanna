var exampleModal = document.getElementById('sannaModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = sannaModal.querySelector('.modal-title')
  var modalBodyInput = sannaModal.querySelector('.modal-body input')

  modalTitle.textContent = 'JOIN THE WAITLIST '; 
// + recipient
//   modalBodyInput.value = recipient
})