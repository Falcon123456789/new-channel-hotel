const scrollContainer = document.querySelector('.scroll-container');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');

function scrollLeft() {
    scrollContainer.scrollBy({
        left: -300, // Adjust scroll amount
        behavior: 'smooth'
    });
}

function scrollRight() {
    scrollContainer.scrollBy({
        left: 300, // Adjust scroll amount
        behavior: 'smooth'
    });
}

// Update button state based on scroll position
function updateButtonState() {
    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    // Disable left button if at the start
    leftButton.classList.toggle('disabled', scrollLeft <= 0);

    // Disable right button if at the end
    rightButton.classList.toggle('disabled', scrollLeft + clientWidth >= scrollWidth);
}

// Add event listener for scroll updates
scrollContainer.addEventListener('scroll', updateButtonState);

// Initialize button states
updateButtonState();
