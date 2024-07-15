import React, { useMemo } from 'react';

function FactorialCalculator({ number }) {
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
