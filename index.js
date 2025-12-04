// We get the calculator display element by its ID
const display = document.getElementById("display");

// НОВЫЙ КОД: Определяем список всех операторов, для которых нужна проверка
const operators = ['+', '-', '*', '/'];

// Function for adding characters (numbers, operators, dots) to the display
function appendToDisplay(input){
    // Getting the current value on the display
    const currentValue = display.value;
    // We get the last character entered
    const lastChar = currentValue.slice(-1); 

    // Check whether the current input is an operator
    const isOperator = operators.includes(input);
    
    // Check if the last character on the display is the operator
    const isLastCharOperator = operators.includes(lastChar);
    
    
    // MAIN LOGIC: If the input and the last character are operators
    if (isOperator && isLastCharOperator) {
        // Replace the old operator with a new one (delete the last character and add input)
        display.value = currentValue.slice(0, -1) + input;
        return; // Abort execution to avoid double addition
    } 
    
    // We forbid starting with '*' or '/'
    if (currentValue === '' && (input === '*' || input === '/')) {
        return; 
    }
    
    // Add the passed value (input) to the current display value
    display.value += input;
}

// Function to clear the calculator display
function clearDisplay(){
    // Setting the display value to an empty string
    display.value = ""
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Вычисление квадратного корня (без истории)
function squareRoot() {
    const currentValue = display.value;
    
    try {
        // 1. Преобразуем значение дисплея в число
        const number = parseFloat(currentValue);
        
        // 2. Проверка на ошибки (не число или отрицательное число)
        if (isNaN(number) || number < 0) {
            display.value = "Error";
            return;
        }
        
        // 3. Вычисляем корень с помощью Math.sqrt()
        const result = Math.sqrt(number);
        
        // 4. Обновляем дисплей
        display.value = result;
        
    } catch (error) {
        display.value = "Error";
    }
}

// A function for calculating the result of an expression on the display
function calculate(){
    try{
        // We use the built-in eval() function to calculate the mathematical expression
        display.value = eval(display.value);
    }
    catch(error){
        // Error handling, for example, in case of incorrect syntax or division by zero
        display.value = "Error";
    }
}

