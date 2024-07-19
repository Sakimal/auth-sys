fetch('/get-username')
    .then(response => response.json())
    .then(data => {
        document.getElementById('username').textContent = data.username;
    })
    .catch(error => console.error('Error:', error));