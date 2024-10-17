function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Prepare data to be sent
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyM8r5IJE_2tb7UFTSI2cvtZPkE2ip8bf17xf7mrlu8Wt_-S0llGvrr-lvOGR3bS4U/exec';

    // POST the form data
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(response => {
            if (response.status === 'success') {
                alert("Form successfully submitted!");
                document.getElementById('contactForm').reset(); // Reset form fields
            } else {
                alert("Error submitting the form. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error submitting the form. Please check your network.");
        });
}
