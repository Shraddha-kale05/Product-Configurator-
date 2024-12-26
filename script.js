
// Ensure NO and NC are always visible and displayed together
document.getElementById('NO-btn').addEventListener('click', function () {
    document.getElementById('NO-input').classList.remove('hidden');
    document.getElementById('NC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('NC-btn').addEventListener('click', function () {
    document.getElementById('NC-input').classList.remove('hidden');
    document.getElementById('NO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const positiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('NO-input').addEventListener('input', positiveNumberOnly);
document.getElementById('NC-input').addEventListener('input', positiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function generateCode() {
    const noValue = document.getElementById('NO-input').value;
    const ncValue = document.getElementById('NC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('whiteimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF111",
            "12": "P2PSF112",
            "10": "P2PSF110",
            "01": "P2PSF101",
            "21": "P2PSF121",
            "23": "P2PSF123",
            "22": "P2PSF122",
            "33": "P2PSF133"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('NO-input').addEventListener('input', generateCode);
document.getElementById('NC-input').addEventListener('input', generateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

  

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('secondnbtnno').addEventListener('click', function () {
    document.getElementById('secondinputno').classList.remove('hidden');
    document.getElementById('secondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('secondnbtnnc').addEventListener('click', function () {
    document.getElementById('secondinputnc').classList.remove('hidden');
    document.getElementById('secondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const SpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('secondinputno').addEventListener('input', SpositiveNumberOnly);
document.getElementById('secondinputnc').addEventListener('input', SpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function SgenerateCode() {
    const noValue = document.getElementById('secondinputno').value;
    const ncValue = document.getElementById('secondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('blackimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF211",
            "10": "P2PSF210",
            "01": "P2PSF201",
            "21": "P2PSF221",
            "23": "P2PSF223",
            "22": "P2PSF222",
            "33": "P2PSF233"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('secondinputno').addEventListener('input', SgenerateCode);
document.getElementById('secondinputnc').addEventListener('input', SgenerateCode);



// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('thirdnbtnno').addEventListener('click', function () {
    document.getElementById('thirdinputno').classList.remove('hidden');
    document.getElementById('thirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('thirdnbtnnc').addEventListener('click', function () {
    document.getElementById('thirdinputnc').classList.remove('hidden');
    document.getElementById('thirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const tpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('thirdinputno').addEventListener('input', tpositiveNumberOnly);
document.getElementById('thirdinputnc').addEventListener('input', tpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function ggenerateCode() {
    const noValue = document.getElementById('thirdinputno').value;
    const ncValue = document.getElementById('thirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('greenimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF311",
            "10": "P2PSF310",
            "01": "P2PSF301",
            "21": "P2PSF321",
            "23": "P2PSF323",
            "22": "P2PSF322",
            "33": "P2PSF333"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('thirdinputno').addEventListener('input', ggenerateCode);
document.getElementById('thirdinputnc').addEventListener('input', ggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('fourthnbtnno').addEventListener('click', function () {
    document.getElementById('fourthinputno').classList.remove('hidden');
    document.getElementById('fourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fourthnbtnnc').addEventListener('click', function () {
    document.getElementById('fourthinputnc').classList.remove('hidden');
    document.getElementById('fourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const redgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fourthinputno').addEventListener('input', redgreenpositiveNumberOnly);
document.getElementById('fourthinputnc').addEventListener('input', redgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function redgreengenerateCode() {
    const noValue = document.getElementById('fourthinputno').value;
    const ncValue = document.getElementById('fourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('redimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF111",
            "12": "P2PSF112",
            "10": "P2PSF110",
            "01": "P2PSF101",
            "21": "P2PSF121",
            "23": "P2PSF123",
            "22": "P2PSF122",
            "33": "P2PSF133"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fourthinputno').addEventListener('input', redgreengenerateCode);
document.getElementById('fourthinputnc').addEventListener('input', redgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('redimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('fivenbtnno').addEventListener('click', function () {
    document.getElementById('fiveinputno').classList.remove('hidden');
    document.getElementById('fiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fivenbtnnc').addEventListener('click', function () {
    document.getElementById('fiveinputnc').classList.remove('hidden');
    document.getElementById('fiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const ypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fiveinputno').addEventListener('input', ypositiveNumberOnly);
document.getElementById('fiveinputnc').addEventListener('input', ypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bluegreengenerateCode() {
    const noValue = document.getElementById('fiveinputno').value;
    const ncValue = document.getElementById('fiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('blueimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF111",
            "12": "P2PSF112",
            "10": "P2PSF110",
            "01": "P2PSF101",
            "21": "P2PSF121",
            "23": "P2PSF123",
            "22": "P2PSF122",
            "33": "P2PSF133"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description: ${code}`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fiveinputno').addEventListener('input', bluegreengenerateCode);
document.getElementById('fiveinputnc').addEventListener('input', bluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('blueimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('sixsnbtnno').addEventListener('click', function () {
    document.getElementById('sixsinputno').classList.remove('hidden');
    document.getElementById('sixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('sixsnbtnnc').addEventListener('click', function () {
    document.getElementById('sixsinputnc').classList.remove('hidden');
    document.getElementById('sixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const yellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('sixsinputno').addEventListener('input', yellowPositiveNumberOnly);
document.getElementById('sixsinputnc').addEventListener('input', yellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function yellowGenerateCode() {
    const noValue = document.getElementById('sixsinputno').value;
    const ncValue = document.getElementById('sixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('yellowimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF811",
            "10": "P2PSF810",
            "01": "P2PSF801",
            "21": "P2PSF821",
            "23": "P2PSF823",
            "22": "P2PSF822",
            "33": "P2PSF833"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('sixsinputno').addEventListener('input', yellowGenerateCode);
document.getElementById('sixsinputnc').addEventListener('input', yellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('yellowimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});




// *********************************************************************************************************************************

// second model

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamNO-btn').addEventListener('click', function () {
    document.getElementById('fwamNO-input').classList.remove('hidden');
    document.getElementById('fwamNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamNC-btn').addEventListener('click', function () {
    document.getElementById('fwamNC-input').classList.remove('hidden');
    document.getElementById('fwamNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const fwampositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamNO-input').addEventListener('input', fwampositiveNumberOnly);
document.getElementById('fwamNC-input').addEventListener('input', fwampositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwamgenerateCode() {
    const noValue = document.getElementById('fwamNO-input').value;
    const ncValue = document.getElementById('fwamNC-input').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF1A11",
            "10": "P2PSF1A10",
            "01": "P2PSF1A01",
            "21": "P2PSF1A21",
            "23": "P2PSF1A23",
            "22": "P2PSF1A22",
            "33": "P2PSF1A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamNO-input').addEventListener('input', fwamgenerateCode);
document.getElementById('fwamNC-input').addEventListener('input', fwamgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.fwam').addEventListener('click', function() {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.fwamform');
    flushForms.forEach(function(form) {
      // Reset each form individually
      form.reset();
    });
  });

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamsecondnbtnno').addEventListener('click', function () {
    document.getElementById('fwamsecondinputno').classList.remove('hidden');
    document.getElementById('fwamsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('fwamsecondinputnc').classList.remove('hidden');
    document.getElementById('fwamsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let fwamblackpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamsecondinputno').addEventListener('input', fwamblackpositiveNumberOnly);
document.getElementById('fwamsecondinputnc').addEventListener('input', fwamblackpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwamblackgenerateCode() {
    const noValue = document.getElementById('fwamsecondinputno').value;
    const ncValue = document.getElementById('fwamsecondinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF2A11",
            "10": "P2PSF2A10",
            "01": "P2PSF2A01",
            "21": "P2PSF2A21",
            "23": "P2PSF2A23",
            "22": "P2PSF2A22",
            "33": "P2PSF2A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamsecondinputno').addEventListener('input', fwamblackgenerateCode);
document.getElementById('fwamsecondinputnc').addEventListener('input', fwamblackgenerateCode);


// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamthirdnbtnno').addEventListener('click', function () {
    document.getElementById('fwamthirdinputno').classList.remove('hidden');
    document.getElementById('fwamthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('fwamthirdinputnc').classList.remove('hidden');
    document.getElementById('fwamthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let fwamgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamthirdinputno').addEventListener('input', fwamgreenpositiveNumberOnly);
document.getElementById('fwamthirdinputnc').addEventListener('input', fwamgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwamgreengenerateCode() {
    const noValue = document.getElementById('fwamthirdinputno').value;
    const ncValue = document.getElementById('fwamthirdinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF3A11",
            "10": "P2PSF3A10",
            "01": "P2PSF3A01",
            "21": "P2PSF3A21",
            "23": "P2PSF3A23",
            "22": "P2PSF3A22",
            "33": "P2PSF3A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamthirdinputno').addEventListener('input', fwamgreengenerateCode);
document.getElementById('fwamthirdinputnc').addEventListener('input', fwamgreengenerateCode);


// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamfourthnbtnno').addEventListener('click', function () {
    document.getElementById('fwamfourthinputno').classList.remove('hidden');
    document.getElementById('fwamfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('fwamfourthinputnc').classList.remove('hidden');
    document.getElementById('fwamfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let fwamredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamfourthinputno').addEventListener('input', fwamredgreenpositiveNumberOnly);
document.getElementById('fwamfourthinputnc').addEventListener('input', fwamredgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwamredgreengenerateCode() {
    const noValue = document.getElementById('fwamfourthinputno').value;
    const ncValue = document.getElementById('fwamfourthinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF4A11",
            "10": "P2PSF4A10",
            "01": "P2PSF4A01",
            "21": "P2PSF4A21",
            "23": "P2PSF4A23",
            "22": "P2PSF4A22",
            "33": "P2PSF4A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamfourthinputno').addEventListener('input', fwamredgreengenerateCode);
document.getElementById('fwamfourthinputnc').addEventListener('input', fwamredgreengenerateCode);

// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamfivenbtnno').addEventListener('click', function () {
    document.getElementById('fwamfiveinputno').classList.remove('hidden');
    document.getElementById('fwamfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamfivenbtnnc').addEventListener('click', function () {
    document.getElementById('fwamfiveinputnc').classList.remove('hidden');
    document.getElementById('fwamfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let fwambluegreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamfiveinputno').addEventListener('input', fwambluegreenpositiveNumberOnly);
document.getElementById('fwamfiveinputnc').addEventListener('input', fwambluegreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwambluegreengenerateCode() {
    const noValue = document.getElementById('fwamfiveinputno').value;
    const ncValue = document.getElementById('fwamfiveinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF6A11",
            "10": "P2PSF6A10",
            "01": "P2PSF6A01",
            "21": "P2PSF6A21",
            "23": "P2PSF6A23",
            "22": "P2PSF6A22",
            "33": "P2PSF6A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamfiveinputno').addEventListener('input', fwambluegreengenerateCode);
document.getElementById('fwamfiveinputnc').addEventListener('input', fwambluegreengenerateCode);

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwamsixsnbtnno').addEventListener('click', function () {
    document.getElementById('fwamsixsinputno').classList.remove('hidden');
    document.getElementById('fwamsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwamsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('fwamsixsinputnc').classList.remove('hidden');
    document.getElementById('fwamsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let fwamyellowpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwamsixsinputno').addEventListener('input', fwamyellowpositiveNumberOnly);
document.getElementById('fwamsixsinputnc').addEventListener('input', fwamyellowpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function fwamyellowgenerateCode() {
    const noValue = document.getElementById('fwamsixsinputno').value;
    const ncValue = document.getElementById('fwamsixsinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF8A11",
            "10": "P2PSF8A10",
            "01": "P2PSF8A01",
            "21": "P2PSF8A21",
            "23": "P2PSF8A23",
            "22": "P2PSF8A22",
            "33": "P2PSF8A33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yfwamimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yfwamimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('fwamsixsinputno').addEventListener('input', fwamyellowgenerateCode);
document.getElementById('fwamsixsinputnc').addEventListener('input', fwamyellowgenerateCode);



// *********************************************************************************************************************************

// third model

// Ensure NO and NC are always visible and displayed together
document.getElementById('ProjNO-btn').addEventListener('click', function () {
    document.getElementById('ProjNO-input').classList.remove('hidden');
    document.getElementById('ProjNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('ProjNC-btn').addEventListener('click', function () {
    document.getElementById('ProjNC-input').classList.remove('hidden');
    document.getElementById('ProjNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const ProjpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('ProjNO-input').addEventListener('input', ProjpositiveNumberOnly);
document.getElementById('ProjNC-input').addEventListener('input', ProjpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjgenerateCode() {
    const noValue = document.getElementById('ProjNO-input').value;
    const ncValue = document.getElementById('ProjNC-input').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP111",
            "10": "P2PSP110",
            "01": "P2PSP101",
            "21": "P2PSP121",
            "23": "P2PSP123",
            "22": "P2PSP122",
            "33": "P2PSP133"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('ProjNO-input').addEventListener('input', ProjgenerateCode);
document.getElementById('ProjNC-input').addEventListener('input', ProjgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.Proj').addEventListener('click', function() {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.Projform');
    flushForms.forEach(function(form) {
      // Reset each form individually
      form.reset();
    });
  });

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('Projsecondnbtnno').addEventListener('click', function () {
    document.getElementById('Projsecondinputno').classList.remove('hidden');
    document.getElementById('Projsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Projsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('Projsecondinputnc').classList.remove('hidden');
    document.getElementById('Projsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let ProjblackpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Projsecondinputno').addEventListener('input', ProjblackpositiveNumberOnly);
document.getElementById('Projsecondinputnc').addEventListener('input', ProjblackpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjblackgenerateCode() {
    const noValue = document.getElementById('Projsecondinputno').value;
    const ncValue = document.getElementById('Projsecondinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP211",
            "10": "P2PSP210",
            "01": "P2PSP201",
            "21": "P2PSP221",
            "23": "P2PSP223",
            "22": "P2PSP222",
            "33": "P2PSP233"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('Projsecondinputno').addEventListener('input', ProjblackgenerateCode);
document.getElementById('Projsecondinputnc').addEventListener('input', ProjblackgenerateCode);


// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('Projthirdnbtnno').addEventListener('click', function () {
    document.getElementById('Projthirdinputno').classList.remove('hidden');
    document.getElementById('Projthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Projthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('Projthirdinputnc').classList.remove('hidden');
    document.getElementById('Projthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let ProjgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Projthirdinputno').addEventListener('input', ProjgreenpositiveNumberOnly);
document.getElementById('Projthirdinputnc').addEventListener('input', ProjgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjgreengenerateCode() {
    const noValue = document.getElementById('Projthirdinputno').value;
    const ncValue = document.getElementById('Projthirdinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP311",
            "10": "P2PSP310",
            "01": "P2PSP301",
            "21": "P2PSP321",
            "23": "P2PSP323",
            "22": "P2PSP322",
            "33": "P2PSP333"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('Projthirdinputno').addEventListener('input', ProjgreengenerateCode);
document.getElementById('Projthirdinputnc').addEventListener('input', ProjgreengenerateCode);


// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('Projfourthnbtnno').addEventListener('click', function () {
    document.getElementById('Projfourthinputno').classList.remove('hidden');
    document.getElementById('Projfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Projfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('Projfourthinputnc').classList.remove('hidden');
    document.getElementById('Projfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let ProjredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Projfourthinputno').addEventListener('input', ProjredgreenpositiveNumberOnly);
document.getElementById('Projfourthinputnc').addEventListener('input', ProjredgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjredgreengenerateCode() {
    const noValue = document.getElementById('Projfourthinputno').value;
    const ncValue = document.getElementById('Projfourthinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP411",
            "10": "P2PSP410",
            "01": "P2PSP401",
            "21": "P2PSP421",
            "23": "P2PSP423",
            "22": "P2PSP422",
            "33": "P2PSP433"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('Projfourthinputno').addEventListener('input', ProjredgreengenerateCode);
document.getElementById('Projfourthinputnc').addEventListener('input', ProjredgreengenerateCode);

// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('Projfivenbtnno').addEventListener('click', function () {
    document.getElementById('Projfiveinputno').classList.remove('hidden');
    document.getElementById('Projfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Projfivenbtnnc').addEventListener('click', function () {
    document.getElementById('Projfiveinputnc').classList.remove('hidden');
    document.getElementById('Projfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let ProjbluegreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Projfiveinputno').addEventListener('input', ProjbluegreenpositiveNumberOnly);
document.getElementById('Projfiveinputnc').addEventListener('input', ProjbluegreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjbluegreengenerateCode() {
    const noValue = document.getElementById('Projfiveinputno').value;
    const ncValue = document.getElementById('Projfiveinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP611",
            "10": "P2PSP610",
            "01": "P2PSP601",
            "21": "P2PSP621",
            "23": "P2PSP623",
            "22": "P2PSP622",
            "33": "P2PSP633"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('Projfiveinputno').addEventListener('input', ProjbluegreengenerateCode);
document.getElementById('Projfiveinputnc').addEventListener('input', ProjbluegreengenerateCode);

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('Projsixsnbtnno').addEventListener('click', function () {
    document.getElementById('Projsixsinputno').classList.remove('hidden');
    document.getElementById('Projsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Projsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('Projsixsinputnc').classList.remove('hidden');
    document.getElementById('Projsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let ProjyellowpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Projsixsinputno').addEventListener('input', ProjyellowpositiveNumberOnly);
document.getElementById('Projsixsinputnc').addEventListener('input', ProjyellowpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function ProjyellowgenerateCode() {
    const noValue = document.getElementById('Projsixsinputno').value;
    const ncValue = document.getElementById('Projsixsinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP811",
            "10": "P2PSP810",
            "01": "P2PSP801",
            "21": "P2PSP821",
            "23": "P2PSP823",
            "22": "P2PSP822",
            "33": "P2PSP833"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yProjimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yProjimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('Projsixsinputno').addEventListener('input', ProjyellowgenerateCode);
document.getElementById('Projsixsinputnc').addEventListener('input', ProjyellowgenerateCode);



// *********************************************************************************************************************************
//**************************************************************************************************************************************** */
// fourthmodel

// Ensure NO and NC are always visible and displayed together
document.getElementById('frraNO-btn').addEventListener('click', function () {
    document.getElementById('frraNO-input').classList.remove('hidden');
    document.getElementById('frraNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraNC-btn').addEventListener('click', function () {
    document.getElementById('frraNC-input').classList.remove('hidden');
    document.getElementById('frraNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frrapositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraNO-input').addEventListener('input', frrapositiveNumberOnly);
document.getElementById('frraNC-input').addEventListener('input', frrapositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frragenerateCode() {
    const noValue = document.getElementById('frraNO-input').value;
    const ncValue = document.getElementById('frraNC-input').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF1RR11",
            "10": "P2PSF1RR10",
            "01": "P2PSF1RR01",
            "21": "P2PSF1RR21",
            "23": "P2PSF1RR23",
            "22": "P2PSF1RR22",
            "33": "P2PSF1RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frraNO-input').addEventListener('input', frragenerateCode);
document.getElementById('frraNC-input').addEventListener('input', frragenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.frra').addEventListener('click', function() {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.frraform');
    flushForms.forEach(function(form) {
      // Reset each form individually
      form.reset();
    });
  });

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrasecondnbtnno').addEventListener('click', function () {
    document.getElementById('frrasecondinputno').classList.remove('hidden');
    document.getElementById('frrasecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrasecondnbtnnc').addEventListener('click', function () {
    document.getElementById('frrasecondinputnc').classList.remove('hidden');
    document.getElementById('frrasecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let frrablackpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrasecondinputno').addEventListener('input', frrablackpositiveNumberOnly);
document.getElementById('frrasecondinputnc').addEventListener('input', frrablackpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frrablackgenerateCode() {
    const noValue = document.getElementById('frrasecondinputno').value;
    const ncValue = document.getElementById('frrasecondinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF2RR11",
            "10": "P2PSF2RR10",
            "01": "P2PSF2RR01",
            "21": "P2PSF2RR21",
            "23": "P2PSF2RR23",
            "22": "P2PSF2RR22",
            "12": "P2PSF2RR12",
            "33": "P2PSF2RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frrasecondinputno').addEventListener('input', frrablackgenerateCode);
document.getElementById('frrasecondinputnc').addEventListener('input', frrablackgenerateCode);


// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrathirdnbtnno').addEventListener('click', function () {
    document.getElementById('frrathirdinputno').classList.remove('hidden');
    document.getElementById('frrathirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrathirdnbtnnc').addEventListener('click', function () {
    document.getElementById('frrathirdinputnc').classList.remove('hidden');
    document.getElementById('frrathirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let frragreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrathirdinputno').addEventListener('input', frragreenpositiveNumberOnly);
document.getElementById('frrathirdinputnc').addEventListener('input', frragreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frragreengenerateCode() {
    const noValue = document.getElementById('frrathirdinputno').value;
    const ncValue = document.getElementById('frrathirdinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF3RR11",
            "10": "P2PSF3RR10",
            "01": "P2PSF3RR01",
            "21": "P2PSF3RR21",
            "23": "P2PSF3RR23",
            "22": "P2PSF3RR22",
            "33": "P2PSF3RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frrathirdinputno').addEventListener('input', frragreengenerateCode);
document.getElementById('frrathirdinputnc').addEventListener('input', frragreengenerateCode);


// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrafourthnbtnno').addEventListener('click', function () {
    document.getElementById('frrafourthinputno').classList.remove('hidden');
    document.getElementById('frrafourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrafourthnbtnnc').addEventListener('click', function () {
    document.getElementById('frrafourthinputnc').classList.remove('hidden');
    document.getElementById('frrafourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let frraredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrafourthinputno').addEventListener('input', frraredgreenpositiveNumberOnly);
document.getElementById('frrafourthinputnc').addEventListener('input', frraredgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frraredgreengenerateCode() {
    const noValue = document.getElementById('frrafourthinputno').value;
    const ncValue = document.getElementById('frrafourthinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF4RR11",
            "10": "P2PSF4RR10",
            "01": "P2PSF4RR01",
            "21": "P2PSF4RR21",
            "23": "P2PSF4RR23",
            "22": "P2PSF4RR22",
            "33": "P2PSF4RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frrafourthinputno').addEventListener('input', frraredgreengenerateCode);
document.getElementById('frrafourthinputnc').addEventListener('input', frraredgreengenerateCode);

// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrafivenbtnno').addEventListener('click', function () {
    document.getElementById('frrafiveinputno').classList.remove('hidden');
    document.getElementById('frrafiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrafivenbtnnc').addEventListener('click', function () {
    document.getElementById('frrafiveinputnc').classList.remove('hidden');
    document.getElementById('frrafiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let frrabluegreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrafiveinputno').addEventListener('input', frrabluegreenpositiveNumberOnly);
document.getElementById('frrafiveinputnc').addEventListener('input', frrabluegreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frrabluegreengenerateCode() {
    const noValue = document.getElementById('frrafiveinputno').value;
    const ncValue = document.getElementById('frrafiveinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF6RR11",
            "10": "P2PSF6RR10",
            "01": "P2PSF6RR01",
            "21": "P2PSF6RR21",
            "23": "P2PSF6RR23",
            "22": "P2PSF6RR22",
            "33": "P2PSF6RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frrafiveinputno').addEventListener('input', frrabluegreengenerateCode);
document.getElementById('frrafiveinputnc').addEventListener('input', frrabluegreengenerateCode);

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrasixsnbtnno').addEventListener('click', function () {
    document.getElementById('frrasixsinputno').classList.remove('hidden');
    document.getElementById('frrasixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrasixsnbtnnc').addEventListener('click', function () {
    document.getElementById('frrasixsinputnc').classList.remove('hidden');
    document.getElementById('frrasixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let frrayellowpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrasixsinputno').addEventListener('input', frrayellowpositiveNumberOnly);
document.getElementById('frrasixsinputnc').addEventListener('input', frrayellowpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function frrayellowgenerateCode() {
    const noValue = document.getElementById('frrasixsinputno').value;
    const ncValue = document.getElementById('frrasixsinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF8RR11",
            "10": "P2PSF8RR10",
            "01": "P2PSF8RR01",
            "21": "P2PSF8RR21",
            "23": "P2PSF8RR23",
            "22": "P2PSF8RR22",
            "33": "P2PSF8RR33"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yfrraimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('yfrraimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('frrasixsinputno').addEventListener('input', frrayellowgenerateCode);
document.getElementById('frrasixsinputnc').addEventListener('input', frrayellowgenerateCode);



// *********************************************************************************************************************************
//**************************************************************************************************************************************** */
// fithmodel

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootNO-btn').addEventListener('click', function () {
    document.getElementById('bootNO-input').classList.remove('hidden');
    document.getElementById('bootNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootNC-btn').addEventListener('click', function () {
    document.getElementById('bootNC-input').classList.remove('hidden');
    document.getElementById('bootNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootNO-input').addEventListener('input', bootpositiveNumberOnly);
document.getElementById('bootNC-input').addEventListener('input', bootpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootgenerateCode() {
    const noValue = document.getElementById('bootNO-input').value;
    const ncValue = document.getElementById('bootNC-input').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB1BT711",
            "10": "P2PSB1BT710",
            "01": "P2PSB1BT701",
            "21": "P2PSB1BT721",
            "23": "P2PSB1BT723",
            "22": "P2PSB1BT722",
            "33": "P2PSB1BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wbootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('wbootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootNO-input').addEventListener('input', bootgenerateCode);
document.getElementById('bootNC-input').addEventListener('input', bootgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.boot').addEventListener('click', function() {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.bootform');
    flushForms.forEach(function(form) {
      // Reset each form individually
      form.reset();
    });
  });

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootsecondnbtnno').addEventListener('click', function () {
    document.getElementById('bootsecondinputno').classList.remove('hidden');
    document.getElementById('bootsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('bootsecondinputnc').classList.remove('hidden');
    document.getElementById('bootsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let bootblackpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootsecondinputno').addEventListener('input', bootblackpositiveNumberOnly);
document.getElementById('bootsecondinputnc').addEventListener('input', bootblackpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootblackgenerateCode() {
    const noValue = document.getElementById('bootsecondinputno').value;
    const ncValue = document.getElementById('bootsecondinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB2BT711",
            "10": "P2PSB2BT710",
            "01": "P2PSB2BT701",
            "21": "P2PSB2BT721",
            "23": "P2PSB2BT723",
            "22": "P2PSB2BT722",
            "33": "P2PSB2BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootsecondinputno').addEventListener('input', bootblackgenerateCode);
document.getElementById('bootsecondinputnc').addEventListener('input', bootblackgenerateCode);


// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootthirdnbtnno').addEventListener('click', function () {
    document.getElementById('bootthirdinputno').classList.remove('hidden');
    document.getElementById('bootthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('bootthirdinputnc').classList.remove('hidden');
    document.getElementById('bootthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let bootgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootthirdinputno').addEventListener('input', bootgreenpositiveNumberOnly);
document.getElementById('bootthirdinputnc').addEventListener('input', bootgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootgreengenerateCode() {
    const noValue = document.getElementById('bootthirdinputno').value;
    const ncValue = document.getElementById('bootthirdinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB3BT711",
            "10": "P2PSB3BT710",
            "01": "P2PSB3BT701",
            "21": "P2PSB3BT721",
            "23": "P2PSB3BT723",
            "22": "P2PSB3BT722",
            "33": "P2PSB3BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gbootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('gbootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootthirdinputno').addEventListener('input', bootgreengenerateCode);
document.getElementById('bootthirdinputnc').addEventListener('input', bootgreengenerateCode);


// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootfourthnbtnno').addEventListener('click', function () {
    document.getElementById('bootfourthinputno').classList.remove('hidden');
    document.getElementById('bootfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('bootfourthinputnc').classList.remove('hidden');
    document.getElementById('bootfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let bootredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootfourthinputno').addEventListener('input', bootredgreenpositiveNumberOnly);
document.getElementById('bootfourthinputnc').addEventListener('input', bootredgreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootredgreengenerateCode() {
    const noValue = document.getElementById('bootfourthinputno').value;
    const ncValue = document.getElementById('bootfourthinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB4BT711",
            "10": "P2PSB4BT710",
            "01": "P2PSB4BT701",
            "21": "P2PSB4BT721",
            "23": "P2PSB4BT723",
            "22": "P2PSB4BT722",
            "33": "P2PSB4BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rbootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('rbootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootfourthinputno').addEventListener('input', bootredgreengenerateCode);
document.getElementById('bootfourthinputnc').addEventListener('input', bootredgreengenerateCode);

// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootfivenbtnno').addEventListener('click', function () {
    document.getElementById('bootfiveinputno').classList.remove('hidden');
    document.getElementById('bootfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootfivenbtnnc').addEventListener('click', function () {
    document.getElementById('bootfiveinputnc').classList.remove('hidden');
    document.getElementById('bootfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let bootbluegreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootfiveinputno').addEventListener('input', bootbluegreenpositiveNumberOnly);
document.getElementById('bootfiveinputnc').addEventListener('input', bootbluegreenpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootbluegreengenerateCode() {
    const noValue = document.getElementById('bootfiveinputno').value;
    const ncValue = document.getElementById('bootfiveinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB6BT711",
            "10": "P2PSB6BT710",
            "01": "P2PSB6BT701",
            "21": "P2PSB6BT721",
            "23": "P2PSB6BT723",
            "22": "P2PSB6BT722",
            "33": "P2PSB6BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbbootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('bbbootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootfiveinputno').addEventListener('input', bootbluegreengenerateCode);
document.getElementById('bootfiveinputnc').addEventListener('input', bootbluegreengenerateCode);

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootsixsnbtnno').addEventListener('click', function () {
    document.getElementById('bootsixsinputno').classList.remove('hidden');
    document.getElementById('bootsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('bootsixsinputnc').classList.remove('hidden');
    document.getElementById('bootsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
let bootyellowpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootsixsinputno').addEventListener('input', bootyellowpositiveNumberOnly);
document.getElementById('bootsixsinputnc').addEventListener('input', bootyellowpositiveNumberOnly);

// Function to generate the code and show the image only if the code is valid
function bootyellowgenerateCode() {
    const noValue = document.getElementById('bootsixsinputno').value;
    const ncValue = document.getElementById('bootsixsinputnc').value;

    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB8BT711",
            "10": "P2PSB8BT710",
            "01": "P2PSB8BT701",
            "21": "P2PSB8BT721",
            "23": "P2PSB8BT723",
            "22": "P2PSB8BT722",
            "33": "P2PSB8BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('ybootimageContainer');

        if (code === 'Invalid Code') {
            // Hide the image if the code is invalid
            imageContainer.classList.add('hidden');
            resultContainer.textContent = 'Generated Code: Invalid Code';
        } else {
            // Show the valid code and the image
            resultContainer.textContent = `Generated Code: ${code}`;
            resultContainer.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
        }
    } else {
        // Hide the result and image if no input is provided
        const resultContainer = document.getElementById('result');
        const imageContainer = document.getElementById('ybootimageContainer');
        resultContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
    }
}

// Monitor input changes to update generated code and show image
document.getElementById('bootsixsinputno').addEventListener('input', bootyellowgenerateCode);
document.getElementById('bootsixsinputnc').addEventListener('input', bootyellowgenerateCode);