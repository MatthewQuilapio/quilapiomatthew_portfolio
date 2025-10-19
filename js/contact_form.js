// contact_form.js

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const response = await fetch('https://formspree.io/f/mnnzevpq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Error sending message.');
    }
  } catch (error) {
    alert('Error sending message.');
    console.error(error);
  }
});
