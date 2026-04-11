	
	function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let resultMultiply = multiply(num1, num2);
                    let resultAddition = addition(num1, num2);
                    let resultDivision = divition(num1,num2);


					// Display the result
					displayResultM(resultMultiply);
                    displayResultA(resultAddition);
                    displayResultD(resultDivision);
				} else {
					displayResult('Please enter valid numbers');
				}
			}

			function multiply(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Multiply the numbers
				return a * b;
			}

            function addition(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Add the numbers
				return a + b;
			}

            function divition(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Divide the numbers
                let c = a;
                let d = b;
				return c / d;
			}

			function displayResultM(resultM) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('resultM');
				resultElement.textContent = `The result of the Multiplication is: ${resultM}`;
			}

            function displayResultA(resultA) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('resultA');
				resultElement.textContent = `The result of the Addition is: ${resultA}`;
			}

            function displayResultD(resultD) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('resultD');
				resultElement.textContent = `The result of the Division is: ${resultD}`;
			}



		
