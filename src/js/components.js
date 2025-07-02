// This file contains JavaScript functions for specific components of the website, such as modal dialogs or dropdown menus. 
// It enhances user interaction and experience.

document.addEventListener('DOMContentLoaded', function() {
    // Example function to toggle a dropdown menu
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        toggleButton.addEventListener('click', function() {
            dropdown.classList.toggle('is-active');
        });
    });

    // Example function to open a modal
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            modal.classList.add('is-active');
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });
});