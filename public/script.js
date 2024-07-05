document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const pancard = document.getElementById('pancard').value;
    
    // Simple form validation
    if (name && email && age && pancard) {
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
