import { useCalculator } from '../hooks/useCalculator';
import { CalculatorBtn } from '../components/CalculatorBtn';
import { BackButton, MDericAttribution } from '@shared/components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { setTheme } from '../store/calcThemeSlice';

type CalcTheme = 'calc-theme-1' | 'calc-theme-2' | 'calc-theme-3';

import '../styles/calculator-theme.css';

export function Calculator() {
  const {
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
  } = useCalculator();

  const theme = useSelector((state: RootState) => state.calculatorTheme.theme);
  const dispatch = useDispatch<AppDispatch>();

  // Theme change handler

  const handleThemeChange = (newTheme: CalcTheme) => {
    dispatch(setTheme(newTheme));
  };

  return (
    // Main container
    <div data-theme={theme} className="calculator-container min-h-screen flex flex-col justify-between font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>

      {/* Main container with flex for side-by-side layout */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-start">

        {/* First Calculator - Basic Calculator */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          {/* Header */}
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-3xl font-medium" style={{ color: 'var(--text-color)' }}>
              Calculator
            </p>

            {/* Theme selector */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${theme === 'calc-theme-1'
                    ? 'ring-2 ring-offset-2 ring-current scale-110'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                  style={{
                    backgroundColor: 'var(--key-bg-accent)',
                    color: 'var(--key-shadow-accent)'
                  }}
                  onClick={() => handleThemeChange("calc-theme-1")}
                  aria-label="Theme 1 - Navy"
                />
                <button
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${theme === 'calc-theme-2'
                    ? 'ring-2 ring-offset-2 ring-current scale-110'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                  style={{
                    backgroundColor: 'var(--key-bg-accent)',
                    color: 'var(--key-shadow-accent)'
                  }}
                  onClick={() => handleThemeChange("calc-theme-2")}
                  aria-label="Theme 2 - Light"
                />
                <button
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${theme === 'calc-theme-3'
                    ? 'ring-2 ring-offset-2 ring-current scale-110'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                  style={{
                    backgroundColor: 'var(--key-bg-accent)',
                    color: 'var(--key-shadow-accent)'
                  }}
                  onClick={() => handleThemeChange("calc-theme-3")}
                  aria-label="Theme 3 - Purple"
                />
              </div>
            </div>
          </div>

          {/* Calculator Main Container */}
          <div className="w-full transition-all duration-300">
            {/* Display */}
            <div
              className="rounded p-4 mb-6 text-right transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-screen)' }}
            >
              <div
                className="text-sm h-6 font-mono transition-all duration-200"
                style={{ color: 'var(--text-primary)', opacity: 0.7 }}
              >
                {expression || '\u00A0'}
              </div>
              <div
                className="text-4xl font-mono font-light truncate transition-all duration-200"
                style={{ color: 'var(--text-white)' }}
              >
                {displayValue}
              </div>
            </div>

            {/* Buttons Grid */}
            <div className="p-6 rounded" style={{ backgroundColor: 'var(--bg-toggle-keypad)' }}>
              <div className="grid grid-cols-4 gap-4">
                {/* First row */}
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('7')}>
                  <span className="text-xl">7</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('8')}>
                  <span className="text-xl">8</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('9')}>
                  <span className="text-xl">9</span>
                </CalculatorBtn>
                <CalculatorBtn variant="primary" onClick={handleDelete}>
                  <span className="text-sm font-semibold">DEL</span>
                </CalculatorBtn>

                {/* Second row */}
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('4')}>
                  <span className="text-xl">4</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('5')}>
                  <span className="text-xl">5</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('6')}>
                  <span className="text-xl">6</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleOperator('+')}>
                  <span className="text-2xl">+</span>
                </CalculatorBtn>

                {/* Third row */}
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('1')}>
                  <span className="text-xl">1</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('2')}>
                  <span className="text-xl">2</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('3')}>
                  <span className="text-xl">3</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleOperator('-')}>
                  <span className="text-2xl">-</span>
                </CalculatorBtn>

                {/* Fourth row */}
                <CalculatorBtn variant="secondary" onClick={handleDecimal}>
                  <span className="text-2xl">.</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber('0')}>
                  <span className="text-xl">0</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleOperator('/')}>
                  <span className="text-xl">/</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleOperator('*')}>
                  <span className="text-xl">×</span>
                </CalculatorBtn>

                {/* Fifth row */}
                <CalculatorBtn variant="primary" onClick={handleClear}>
                  <span className="text-sm font-semibold">RESET</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={handleNegate}>
                  <span className="text-xl">±</span>
                </CalculatorBtn>
                <div className="col-span-2">
                  <CalculatorBtn variant="accent" onClick={handleCalculate}>
                    <span className="text-2xl font-bold">=</span>
                  </CalculatorBtn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Calculator - Scientific Functions */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          {/* Header */}
          <div className="w-full mb-6">
            <p className="text-3xl font-medium" style={{ color: 'var(--text-color)' }}>
              Scientific
            </p>
          </div>

          {/* Scientific Calculator Container */}
          <div className="w-full transition-all duration-300">
            {/* Scientific Functions Grid */}
            <div className="p-6 rounded" style={{ backgroundColor: 'var(--bg-toggle-keypad)' }}>
              <div className="grid grid-cols-3 gap-4">
                {/* Row 1 - Basic Scientific Functions */}
                <CalculatorBtn variant="secondary" onClick={() => handleNumber("²")}>
                  <span className="text-lg">x²</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={() => handleNumber("√")}>
                  <span className="text-lg">√x</span>
                </CalculatorBtn>
                <CalculatorBtn variant="secondary" onClick={handle1OverX}>
                  <span className="text-lg">1/x</span>
                </CalculatorBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
}
