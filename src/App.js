import React, { useState } from 'react';
import './App.css';

function App() {
  const [n, setN] = useState(0); // To store the user input
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]); // To store the Fibonacci numbers

  // Function to generate Fibonacci numbers up to 'n'
  const generateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n); // Return the Fibonacci sequence up to 'n' terms
  };

  // Handle button click
  const handleGenerate = () => {
    if (n <= 0) {
      alert("Please enter a positive number.");
      return;
    }
    const fibNumbers = generateFibonacci(n);
    setFibonacciNumbers(fibNumbers);
  };

  return (
    <div className="App">
      <h1>Fibonacci Sequence Generator</h1>
      <div>
        <input 
          type="number" 
          value={n} 
          onChange={(e) => setN(parseInt(e.target.value))}
          placeholder="Enter a number"
        />
        <button onClick={handleGenerate}>Generate Fibonacci</button>
      </div>

      <h2>Fibonacci Numbers:</h2>
      <ul>
        {fibonacciNumbers.length > 0 ? (
          fibonacciNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))
        ) : (
          <li>No Fibonacci numbers to display</li>
        )}
      </ul>
    </div>
  );
}

export default App;
