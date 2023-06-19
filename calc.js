
// Calculator class
class Calculator {
    constructor() {
      this.currentValue = 0;
    }
  
    add(number) {
      this.currentValue += number;
    }
  
    subtract(number) {
      this.currentValue -= number;
    }
  
    multiply(number) {
      this.currentValue *= number;
    }
  
    divide(number) {
      if (number !== 0) {
        this.currentValue /= number;
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
    }
  
    clear() {
      this.currentValue = 0;
    }
  
    getResult() {
      return this.currentValue;
    }
  }
  
  // Usage example
  const calculator = new Calculator();
  
  calculator.add(5);
  calculator.multiply(3);
  calculator.subtract(2);
  calculator.divide(4);
  
  console.log("Result: ", calculator.getResult()); // Output: Result:  4
  
  