import React, { useState } from 'react';


function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') {
        return String(value);
      } else {
        return prevValue + value;
      }
    });
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  return (
    <div className="calculator">
        <h1 id="header">Calc</h1>
          <input className='input' value={displayValue}/>
      <div className="buttons">
        <button onClick={() => handleButtonClick(7)}>7</button>
        <button onClick={() => handleButtonClick(8)}>8</button>
        <button onClick={() => handleButtonClick(9)}>9</button>
        <button id='delete' onClick={handleClear}>DEL</button>
        <button onClick={() => handleButtonClick(4)}>4</button>
        <button onClick={() => handleButtonClick(5)}>5</button>
        <button onClick={() => handleButtonClick(6)}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)}>2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick(0)}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>x</button> 
        <button id='reset' onClick={handleClear}>RESET</button>
        <button id='equal' onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
