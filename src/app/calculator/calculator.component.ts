import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-calculator',
  imports: [MatButtonModule, MatToolbarModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
    title = 'Calculator';
    ngOnInit() {
      const calculator = {
        displayValue: '0',
        firstOperand: null as number | null,
        waitingForSecondOperand: false,
        operator: null as string | null
      };
  
      function updateDisplay() {
        const display: any = document.querySelector('.screen-calc');
        display.value = calculator.displayValue;
      }
  
      function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
      }
  
      updateDisplay();
  
      const keys: any = document.querySelector('.btn-calc');
      keys.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as Element;
        if (!target.matches('button')) {
          return;
        }
  
        if (target.classList.contains('operator')) {
          handleOperator((target as HTMLButtonElement).value);
          updateDisplay();
          return;
        }
  
        if (target.classList.contains('decimal')) {
          inputDecimal((target as HTMLButtonElement).value);
          updateDisplay();
          return;
        }
  
        if (target.classList.contains('clear')) {
          resetCalculator();
          updateDisplay();
        }
  
        inputDigit((target as HTMLButtonElement).value);
        updateDisplay();
        return;
      });
  
      interface Calculator {
        displayValue: string;
        firstOperand: number | null;
        waitingForSecondOperand: boolean;
        operator: string | null;
      }
  
      function inputDigit(digit: string) {
        const { displayValue, waitingForSecondOperand }: Calculator = calculator;
  
        if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
        } else {
        calculator.displayValue =
          displayValue === '0' ? digit : displayValue + digit;
        }
      }
  
      function inputDecimal(dot: string) {
        if (calculator.waitingForSecondOperand === true) {
          return;
        }
        if (!calculator.displayValue.includes(dot)) {
          calculator.displayValue += dot;
        }
      }
      const performCalculation = {
        '/': (firstOperand: number, secondOperand: number) => firstOperand / secondOperand,
        '*': (firstOperand: number, secondOperand: number) => firstOperand * secondOperand,
        '+': (firstOperand: number, secondOperand: number) => firstOperand + secondOperand,
        '-': (firstOperand: number, secondOperand: number) => firstOperand - secondOperand,
        '=': (firstOperand: number, secondOperand: number) => secondOperand
      };
  
      function handleOperator(nextOperator: string) {
        const { firstOperand, displayValue, operator } = calculator;
        const inputValue = parseFloat(displayValue);
  
        if (operator && calculator.waitingForSecondOperand) {
          calculator.operator = nextOperator;
          return;
        }
  
        if (firstOperand == null) {
          calculator.firstOperand = inputValue;
        } else if (operator) {
          const currentValue = firstOperand || 0;
          const result = performCalculation[operator as keyof typeof performCalculation](currentValue, inputValue);
          calculator.displayValue = String(result);
          calculator.firstOperand = result;
        }
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
      }
    }
  }