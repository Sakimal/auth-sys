function toggleForm(formId) {
    document.getElementById('registerForm').style.display = formId === 'registerForm' ? 'block' : 'none';
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await response.json();
    if (data.success) {
        window.location.href = '/welcome';
    } else {
        alert(data.message);
    }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await response.text();
    alert(data);
    toggleForm('loginForm');
});