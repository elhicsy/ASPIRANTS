document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can add more complex validation if needed)
    if (!name || !email || !message) {
        document.getElementById('responseMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Simulate form submission (e.g., send data to a server)
    // Here you would usually send a POST request with form data
    console.log('Form submitted:', { name, email, message });

    // Show a success message
    document.getElementById('responseMessage').innerText = 'Thank you for your submission!';
    
    // Clear form fields
    document.getElementById('signUpForm').reset();
});
