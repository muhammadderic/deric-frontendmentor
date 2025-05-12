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
  }, [waitingForOperand]);

  const handleDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(prev => prev + '.');
    }
  }, [waitingForOperand, displayValue]);

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
    handleClear,
    handleDelete,
    handleDecimal,
    handleNegate,
  };
};