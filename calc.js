
// Calculator class
class Calculator {
    constructor(calculator) {
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
 let result = document.getElementById('calculate').value
  const calculator = new Calculator(calculator);
  
  
