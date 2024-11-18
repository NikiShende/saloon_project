// prePayment.js

document.getElementById('prePaymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const service = document.getElementById('service').value;
    const amount = document.getElementById('amount').value;

    // Validate inputs
    if (!service || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    // Store service and amount in local storage or pass to payment page
    localStorage.setItem('service', service);
    localStorage.setItem('amount', amount);

    // Redirect to the payment page
    window.location.href = 'payment.html';
});