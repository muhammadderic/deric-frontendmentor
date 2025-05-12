import { 
  useState, 
  useCallback 
} from 'react';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [expression, setExpression] = useState<string>('');

  // ===== Handlers =====
  const handleNumber = useCallback((num: string) => {
    if (waitingForOperand) {
      setDisplayValue(num);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(prev => (prev === '0' ? num : prev + num));
    }

    // Check if the number is a square operation
    if (num === "√") {
      // Check if the display value is a number
      if (!isNaN(Number(displayValue))) {
        // Calculate the square root of the number
        const result = Number(displayValue) ** 0.5;
        setDisplayValue(result.toString());
      }
    }

    // Check if the number is a square operation
    if (num === "²") {
      // Check if the display value is a number
      if (!isNaN(Number(displayValue))) {
        // Calculate the square of the number
        const result = Number(displayValue) ** 2;
        setDisplayValue(result.toString());
      }
    }
  }, [waitingForOperand, displayValue]);

  const handleDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(prev => prev + '.');
    }
  }, [waitingForOperand, displayValue]);

  // handle1OverX
  const handle1OverX = useCallback(() => {
    if (!displayValue) return;

    const result = 1 / Number(displayValue);
    setDisplayValue(result.toString());
  }, [displayValue]);

  const handleClear = useCallback(() => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setExpression('');
  }, []);

  const handleDelete = useCallback(() => {
    if (waitingForOperand) return;
    setDisplayValue(prev => {
      if (prev.length === 1 || (prev.length === 2 && prev.startsWith('-'))) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  }, [waitingForOperand]);

  const handleNegate = useCallback(() => {
    const value = parseFloat(displayValue);
    if (isNaN(value)) return;
    setDisplayValue((value * -1).toString());
  }, [displayValue]);

  const calculate = useCallback((a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  }, []);

  const handleOperator = useCallback((nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (isNaN(inputValue)) return;

    if (operator && !waitingForOperand) {
      const result = calculate(previousValue!, inputValue, operator);
      setDisplayValue(String(result));
      setPreviousValue(result);
      setExpression(`${result} ${nextOperator}`);
    } else {
      setPreviousValue(inputValue);
      setExpression(`${inputValue} ${nextOperator}`);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  }, [displayValue, operator, waitingForOperand, previousValue, calculate]);

  const handleCalculate = useCallback(() => {
    if (!operator || waitingForOperand) return;

    const inputValue = parseFloat(displayValue);
    if (isNaN(inputValue)) return;

    const result = calculate(previousValue!, inputValue, operator);
    setDisplayValue(String(result));
    setExpression(`${previousValue} ${operator} ${inputValue} =`);
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }, [operator, waitingForOperand, displayValue, previousValue, calculate]);

  return {
    displayValue,
    expression,
    handleNumber,
    handleOperator,
    handleCalculate,
    handle1OverX,
    handleClear,
    handleDelete,
    handleDecimal,
    handleNegate,
  };
};