// Select elements from the DOM
const inputElement = document.querySelector('#input'); // Input field
const buttonElement = document.querySelector('#button'); // Add Chapter button
const listElement = document.querySelector('.list'); // Unordered list

// Add click event listener to the button
buttonElement.addEventListener('click', () => {
    // Check if the input is not blank
    if (inputElement.value.trim() !== '') {
        // Create an li element
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Populate the li textContent with the input value
        li.textContent = inputElement.value.trim();

        // Populate the delete button with a ❌
        deleteButton.textContent = '❌';

        // Append the delete button to the li
        li.append(deleteButton);

        // Append the li to the unordered list
        listElement.append(li);

        // Add an event listener to the delete button to remove the li
        deleteButton.addEventListener('click', () => {
            listElement.removeChild(li);
            inputElement.focus(); // Return focus to the input field
        });

        // Clear the input field
        inputElement.value = '';

        // Send focus back to the input field
        inputElement.focus();
    } else {
        // If the input is blank, display an alert and return focus to the input
        alert('Please enter a book and chapter.');
        inputElement.focus();
    }
});
