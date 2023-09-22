// need to work on this
const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up: make sure your password is at least 8 characters long');
      }
    }
  };
  
  document
    .querySelector('.sign-up-form')
    .addEventListener('submit', signUpFormHandler);