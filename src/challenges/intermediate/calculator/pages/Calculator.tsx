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

  // Button configurations
  const buttons = [
    { label: 'calc', type: 'text' as const, span: true, action: () => { } },
    { label: 'THEME', type: 'text' as const, action: () => { } },
    { label: '123', type: 'function' as const, action: () => handleNumber('123') },
    { label: '399,981', type: 'display' as const, action: () => { } },
    { label: '8', type: 'number' as const, action: () => handleNumber('8') },
    { label: '9', type: 'number' as const, action: () => handleNumber('9') },
    { label: 'DEL', type: 'function' as const, action: handleDelete },
    { label: '4', type: 'number' as const, action: () => handleNumber('4') },
    { label: '5', type: 'number' as const, action: () => handleNumber('5') },
    { label: '6', type: 'number' as const, action: () => handleNumber('6') },
    { label: '1', type: 'number' as const, action: () => handleNumber('1') },
    { label: '2', type: 'number' as const, action: () => handleNumber('2') },
    { label: '3', type: 'number' as const, action: () => handleNumber('3') },
    { label: '0', type: 'number' as const, action: () => handleNumber('0') },
    { label: 'RESET', type: 'function' as const, action: handleClear, span: true },
  ];

  return (
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
        {/* First row */}
        <div className="col-span-2">
          <CalculatorBtn variant="function" onClick={buttons[0].action}>
            {buttons[0].label}
          </CalculatorBtn>
        </div>
        <CalculatorBtn variant="function" onClick={buttons[1].action}>
          {buttons[1].label}
        </CalculatorBtn>
        <CalculatorBtn variant="display" onClick={buttons[3].action}>
          {buttons[3].label}
        </CalculatorBtn>

        {/* Second row */}
        <CalculatorBtn variant="number" onClick={buttons[4].action}>
          {buttons[4].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={buttons[5].action}>
          {buttons[5].label}
        </CalculatorBtn>
        <CalculatorBtn variant="function" onClick={buttons[6].action}>
          {buttons[6].label}
        </CalculatorBtn>
        <CalculatorBtn variant="operator" onClick={() => handleOperator('/')}>
          ÷
        </CalculatorBtn>

        {/* Third row */}
        <CalculatorBtn variant="number" onClick={buttons[7].action}>
          {buttons[7].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={buttons[8].action}>
          {buttons[8].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={buttons[9].action}>
          {buttons[9].label}
        </CalculatorBtn>
        <CalculatorBtn variant="operator" onClick={() => handleOperator('*')}>
          ×
        </CalculatorBtn>

        {/* Fourth row */}
        <CalculatorBtn variant="number" onClick={buttons[10].action}>
          {buttons[10].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={buttons[11].action}>
          {buttons[11].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={buttons[12].action}>
          {buttons[12].label}
        </CalculatorBtn>
        <CalculatorBtn variant="operator" onClick={() => handleOperator('-')}>
          -
        </CalculatorBtn>

        {/* Fifth row */}
        <CalculatorBtn variant="number" onClick={buttons[13].action}>
          {buttons[13].label}
        </CalculatorBtn>
        <CalculatorBtn variant="number" onClick={() => handleNumber('00')}>
          00
        </CalculatorBtn>
        <CalculatorBtn variant="function" onClick={handleDecimal}>
          .
        </CalculatorBtn>
        <CalculatorBtn variant="operator" onClick={() => handleOperator('+')}>
          +
        </CalculatorBtn>

        {/* Sixth row */}
        <div className="col-span-2">
          <CalculatorBtn variant="function" onClick={buttons[14].action}>
            {buttons[14].label}
          </CalculatorBtn>
        </div>
        <CalculatorBtn variant="operator" onClick={handleNegate}>
          ±
        </CalculatorBtn>
        <CalculatorBtn variant="operator" onClick={handleCalculate}>
          =
        </CalculatorBtn>
      </div>
    </div>
  );
};