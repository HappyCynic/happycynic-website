// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    console.log('Happy Cynic Software - Main JavaScript Loaded');

    // Set up event listeners for interactive elements
    const packingListButton = document.getElementById('packing-list-button');
    if (packingListButton) {
        packingListButton.addEventListener('click', function() {
            alert('Packing list feature coming soon!');
        });
    }

    // Additional interactive features can be added here
});