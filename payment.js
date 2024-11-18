document.getElementById('upiPaymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form submission

    // Get form values
    const upiId = document.getElementById('upiId').value;
    const amount = document.getElementById('amount').value;
    const note = document.getElementById('note').value;

    // Create UPI link
    const upiLink = `upi://pay?pa=${upiId}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    // Display the link
    const upiLinkElement = document.getElementById('upiLink');
    upiLinkElement.href = upiLink;
    upiLinkElement.textContent = `Pay ₹${amount} via UPI`;
    document.getElementById('paymentLink').style.display = 'block';
});
