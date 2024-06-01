document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

        // Perform validation (you can add your custom validation logic here)

        // Send the form data to the server using AJAX
        fetch('/register', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Handle the response from the server (e.g., show a success message)
            console.log(data);
            alert('Registration successful!');
            // Optionally, redirect the user to another page
            window.location.href = '/login';
        })
        .catch(error => {
            // Handle errors (e.g., display an error message)
            console.error('There was a problem with the fetch operation:', error);
            alert('Registration failed. Please try again.');
        });
    });
});
