const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.querySelector('.closeIcon');
const tryAgain = document.getElementById('okBtn');
const modal = document.querySelector('.modal');

// On modal btn is clicked
modalBtn.addEventListener('click', () => {
    // Show modal
    modal.classList.add('active')
})

// On close btn is clicked
closeBtn.addEventListener('click', () => {
    // Hide Modal
    modal.classList.remove('active')
})

// On try again btn is clicked
tryAgain.addEventListener('click', () => {
    // Hide modal
    modal.classList.remove('active');

    // Do something
});

// On window is clicked
window.addEventListener('click', event => {
  // Check if the click it was on the modal
    if (event.target == modal) 
        // Hide Modal
        modal.classList.remove('active')
})