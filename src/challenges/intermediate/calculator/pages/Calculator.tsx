import { useCalculator } from '../hooks/useCalculator';
import { CalculatorBtn } from '../components/CalculatorBtn';

export function Calculator() {
  const {
    displayValue,
    expression,
    handleNumber,
    handleOperator,
    handleCalculate,
    handleClear,
    handleDelete,
    handleDecimal,
    handleNegate,
  } = useCalculator();

  return (
    // Main container
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <p className="text-3xl font-medium">Calculator</p>
        <p className="text-3xl font-medium">Menu</p>
      </div>

      <div className="bg-gray-900 rounded-3xl p-6 w-96 shadow-xl">
        {/* Display */}
        <div className="bg-gray-800 rounded-2xl p-4 mb-6 text-right">
          <div className="text-gray-400 text-sm h-6">{expression || ''}</div>
          <div className="text-white text-4xl font-mono font-light truncate">
            {displayValue}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Second row */}
          <CalculatorBtn variant="number" onClick={() => handleNumber('8')}>
            <p>8</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('9')}>
            <p>9</p>
          </CalculatorBtn>
          <CalculatorBtn variant="function" onClick={handleDelete}>
            <p>DEL</p>
          </CalculatorBtn>
          <CalculatorBtn variant="operator" onClick={() => handleOperator('/')}>
            <p>÷</p>
          </CalculatorBtn>

          {/* Third row */}
          <CalculatorBtn variant="number" onClick={() => handleNumber('4')}>
            <p>4</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('5')}>
            <p>5</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('6')}>
            <p>6</p>
          </CalculatorBtn>
          <CalculatorBtn variant="operator" onClick={() => handleOperator('*')}>
            <p>×</p>
          </CalculatorBtn>

          {/* Fourth row */}
          <CalculatorBtn variant="number" onClick={() => handleNumber('1')}>
            <p>1</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('2')}>
            <p>2</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('3')}>
            <p>3</p>
          </CalculatorBtn>
          <CalculatorBtn variant="operator" onClick={() => handleOperator('-')}>
            <p>-</p>
          </CalculatorBtn>

          {/* Fifth row */}
          <CalculatorBtn variant="function" onClick={handleDecimal}>
            <p>.</p>
          </CalculatorBtn>
          <CalculatorBtn variant="number" onClick={() => handleNumber('0')}>
            <p>0</p>
          </CalculatorBtn>
          <CalculatorBtn variant="operator" onClick={handleNegate}>
            <p>±</p>
          </CalculatorBtn>
          <CalculatorBtn variant="operator" onClick={() => handleOperator('+')}>
            <p>+</p>
          </CalculatorBtn>

          {/* Sixth row */}
          <div className="col-span-2">
            <CalculatorBtn variant="function" onClick={handleClear}>
              <p>RESET</p>
            </CalculatorBtn>
          </div>
          <CalculatorBtn variant="operator" onClick={handleCalculate}>
            <p>=</p>
          </CalculatorBtn>
        </div>
      </div>
    </div>
  );
}
