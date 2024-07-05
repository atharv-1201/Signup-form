document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const pancard = document.getElementById('pancard').value;


     // Create UserInput object
     const userInput = {
        name: name,
        email: email,
        age: age,
        pancard: pancard
    };
    
   


    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age, pancard })
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error:', error));



     // Simple form validation
     if (name && email && age && pancard) {
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields.');
    }

});


