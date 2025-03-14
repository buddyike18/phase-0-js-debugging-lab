function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger; // Pause to inspect initial values
    let totalPrice = 0;
  
    // Corrected loop: start at 0 to account for all items
    for (let i = 0; i < quantity; i++) {
      totalPrice += pricePerItem;
      debugger; // Inspect totalPrice after each addition
    }
  
    if (quantity >= 10) {
      totalPrice *= 0.9;
      debugger; // Inspect totalPrice after applying discount
    }
  
    return totalPrice;
  }
  
  // Run example usage only when this file is executed directly
  if (require.main === module) {
    console.log(calculateDiscountedPrice(5, 100));  // Expected output: 500 (no discount)
    console.log(calculateDiscountedPrice(10, 100)); // Expected output: 900 (10% discount applied)
  }
  
  // Export the function for testing
  module.exports = calculateDiscountedPrice;
  