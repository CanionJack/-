document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const ticketQuantity = parseInt(document.getElementById("ticketQuantity").value);
  const totalPrice = calculatePrice(ticketQuantity);
  const confirmationMessage = `You have booked ${ticketQuantity} tickets. Total Price: $${totalPrice}`;
  document.getElementById("confirmation").innerText = confirmationMessage;
});

function calculatePrice(quantity) {
  // Assume ticket price is $10
  const ticketPrice = 10;
  return quantity * ticketPrice;
}

