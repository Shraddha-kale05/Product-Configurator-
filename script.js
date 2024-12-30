
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
            "33": "P2PSF133",
            "32": "P2PSF132",
            "13": "P2PSF113",
            "14": "P2PSF114",
            "15": "P2PSF115",
            "24": "P2PSF124",
            "31": "P2PSF131",
            "41": "P2PSF141",
            "42": "P2PSF142",
            "51": "P2PSF151",
            "00": "P2PSF100",
            "20": "P2PSF120",
            "30": "P2PSF130",
            "40": "P2PSF140",
            "50": "P2PSF150",
            "60": "P2PSF160",
            "02": "P2PSF102",
            "03": "P2PSF103",
            "04": "P2PSF104",
            "05": "P2PSF105",
            "06": "P2PSF106"
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

//   ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('ENO-btn').addEventListener('click', function () {
    document.getElementById('ENO-input').classList.remove('hidden');
    document.getElementById('ENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('ENC-btn').addEventListener('click', function () {
    document.getElementById('ENC-input').classList.remove('hidden');
    document.getElementById('ENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('ENO-input').addEventListener('input', EpositiveNumberOnly);
document.getElementById('ENC-input').addEventListener('input', EpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function EgenerateCode() {
    const noValue = document.getElementById('ENO-input').value;
    const ncValue = document.getElementById('ENC-input').value;

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
            "11": "EP2PSF111",
            "12": "EP2PSF112",
            "10": "EP2PSF110",
            "01": "EP2PSF101",
            "21": "EP2PSF121",
            "23": "EP2PSF123",
            "22": "EP2PSF122",
            "33": "EP2PSF133",
            "32": "EP2PSF132",
            "13": "EP2PSF113",
            "14": "EP2PSF114",
            "15": "EP2PSF115",
            "24": "EP2PSF124",
            "31": "EP2PSF131",
            "41": "EP2PSF141",
            "42": "EP2PSF142",
            "51": "EP2PSF151",
            "00": "EP2PSF100",
            "20": "EP2PSF120",
            "30": "EP2PSF130",
            "40": "EP2PSF140",
            "50": "EP2PSF150",
            "60": "EP2PSF160",
            "02": "EP2PSF102",
            "03": "EP2PSF103",
            "04": "EP2PSF104",
            "05": "EP2PSF105",
            "06": "EP2PSF106"
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
document.getElementById('ENO-input').addEventListener('input', EgenerateCode);
document.getElementById('ENC-input').addEventListener('input', EgenerateCode);

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
            "12": "P2PSF212",
            "10": "P2PSF210",
            "01": "P2PSF201",
            "21": "P2PSF221",
            "23": "P2PSF223",
            "22": "P2PSF222",
            "33": "P2PSF233",
            "32": "P2PSF232",
            "13": "P2PSF213",
            "14": "P2PSF214",
            "15": "P2PSF215",
            "24": "P2PSF224",
            "31": "P2PSF231",
            "41": "P2PSF241",
            "42": "P2PSF242",
            "51": "P2PSF251",
            "00": "P2PSF200",
            "20": "P2PSF220",
            "30": "P2PSF230",
            "40": "P2PSF240",
            "50": "P2PSF250",
            "60": "P2PSF260",
            "02": "P2PSF202",
            "03": "P2PSF203",
            "04": "P2PSF204",
            "05": "P2PSF205",
            "06": "P2PSF206"
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

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('Esecondnbtnno').addEventListener('click', function () {
    document.getElementById('Esecondinputno').classList.remove('hidden');
    document.getElementById('Esecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Esecondnbtnnc').addEventListener('click', function () {
    document.getElementById('Esecondinputnc').classList.remove('hidden');
    document.getElementById('Esecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const ESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Esecondinputno').addEventListener('input', ESpositiveNumberOnly);
document.getElementById('Esecondinputnc').addEventListener('input', ESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function ESgenerateCode() {
    const noValue = document.getElementById('Esecondinputno').value;
    const ncValue = document.getElementById('Esecondinputnc').value;

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
            "11": "EP2PSF211",
            "12": "EP2PSF212",
            "10": "EP2PSF210",
            "01": "EP2PSF201",
            "21": "EP2PSF221",
            "23": "EP2PSF223",
            "22": "EP2PSF222",
            "33": "EP2PSF233",
            "32": "EP2PSF232",
            "13": "EP2PSF213",
            "14": "EP2PSF214",
            "15": "EP2PSF215",
            "24": "EP2PSF224",
            "31": "EP2PSF231",
            "41": "EP2PSF241",
            "42": "EP2PSF242",
            "51": "EP2PSF251",
            "00": "EP2PSF200",
            "20": "EP2PSF220",
            "30": "EP2PSF230",
            "40": "EP2PSF240",
            "50": "EP2PSF250",
            "60": "EP2PSF260",
            "02": "EP2PSF202",
            "03": "EP2PSF203",
            "04": "EP2PSF204",
            "05": "EP2PSF205",
            "06": "EP2PSF206"
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
document.getElementById('Esecondinputno').addEventListener('input', ESgenerateCode);
document.getElementById('Esecondinputnc').addEventListener('input', ESgenerateCode);

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
            "12": "P2PSF312",
            "10": "P2PSF310",
            "01": "P2PSF301",
            "21": "P2PSF321",
            "23": "P2PSF323",
            "22": "P2PSF322",
            "33": "P2PSF333",
            "32": "P2PSF332",
            "13": "P2PSF313",
            "14": "P2PSF314",
            "15": "P2PSF315",
            "24": "P2PSF324",
            "31": "P2PSF331",
            "41": "P2PSF341",
            "42": "P2PSF342",
            "51": "P2PSF351",
            "00": "P2PSF300",
            "20": "P2PSF320",
            "30": "P2PSF330",
            "40": "P2PSF340",
            "50": "P2PSF350",
            "60": "P2PSF360",
            "02": "P2PSF302",
            "03": "P2PSF303",
            "04": "P2PSF304",
            "05": "P2PSF305",
            "06": "P2PSF306"
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

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('Ethirdnbtnno').addEventListener('click', function () {
    document.getElementById('Ethirdinputno').classList.remove('hidden');
    document.getElementById('Ethirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Ethirdnbtnnc').addEventListener('click', function () {
    document.getElementById('Ethirdinputnc').classList.remove('hidden');
    document.getElementById('Ethirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Ethirdinputno').addEventListener('input', EtpositiveNumberOnly);
document.getElementById('Ethirdinputnc').addEventListener('input', EtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function EggenerateCode() {
    const noValue = document.getElementById('Ethirdinputno').value;
    const ncValue = document.getElementById('Ethirdinputnc').value;

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
            "11": "EP2PSF311",
            "12": "EP2PSF312",
            "10": "EP2PSF310",
            "01": "EP2PSF301",
            "21": "EP2PSF321",
            "23": "EP2PSF323",
            "22": "EP2PSF322",
            "33": "EP2PSF333",
            "32": "EP2PSF332",
            "13": "EP2PSF313",
            "14": "EP2PSF314",
            "15": "EP2PSF315",
            "24": "EP2PSF324",
            "31": "EP2PSF331",
            "41": "EP2PSF341",
            "42": "EP2PSF342",
            "51": "EP2PSF351",
            "00": "EP2PSF300",
            "20": "EP2PSF320",
            "30": "EP2PSF330",
            "40": "EP2PSF340",
            "50": "EP2PSF350",
            "60": "EP2PSF360",
            "02": "EP2PSF302",
            "03": "EP2PSF303",
            "04": "EP2PSF304",
            "05": "EP2PSF305",
            "06": "EP2PSF306"
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
document.getElementById('Ethirdinputno').addEventListener('input', EggenerateCode);
document.getElementById('Ethirdinputnc').addEventListener('input', EggenerateCode);

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
            "11": "P2PSF411",
            "12": "P2PSF412",
            "10": "P2PSF410",
            "01": "P2PSF401",
            "21": "P2PSF421",
            "23": "P2PSF423",
            "22": "P2PSF422",
            "33": "P2PSF433",
            "32": "P2PSF432",
            "13": "P2PSF413",
            "14": "P2PSF414",
            "15": "P2PSF415",
            "24": "P2PSF424",
            "31": "P2PSF431",
            "41": "P2PSF441",
            "42": "P2PSF442",
            "51": "P2PSF451",
            "00": "P2PSF400",
            "20": "P2PSF420",
            "30": "P2PSF430",
            "40": "P2PSF440",
            "50": "P2PSF450",
            "60": "P2PSF460",
            "02": "P2PSF402",
            "03": "P2PSF403",
            "04": "P2PSF404",
            "05": "P2PSF405",
            "06": "P2PSF406"
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
            "11": "P2PSF611",
            "12": "P2PSF612",
            "10": "P2PSF610",
            "01": "P2PSF601",
            "21": "P2PSF621",
            "23": "P2PSF623",
            "22": "P2PSF622",
            "33": "P2PSF633",
            "32": "P2PSF632",
            "13": "P2PSF613",
            "14": "P2PSF614",
            "15": "P2PSF615",
            "24": "P2PSF624",
            "31": "P2PSF631",
            "41": "P2PSF641",
            "42": "P2PSF642",
            "51": "P2PSF651",
            "00": "P2PSF600",
            "20": "P2PSF620",
            "30": "P2PSF630",
            "40": "P2PSF640",
            "50": "P2PSF650",
            "60": "P2PSF660",
            "02": "P2PSF602",
            "03": "P2PSF603",
            "04": "P2PSF604",
            "05": "P2PSF605",
            "06": "P2PSF606"
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
            "12": "P2PSF812",
            "10": "P2PSF810",
            "01": "P2PSF801",
            "21": "P2PSF821",
            "23": "P2PSF823",
            "22": "P2PSF822",
            "33": "P2PSF833",
            "32": "P2PSF832",
            "13": "P2PSF813",
            "14": "P2PSF814",
            "15": "P2PSF815",
            "24": "P2PSF824",
            "31": "P2PSF831",
            "41": "P2PSF841",
            "42": "P2PSF842",
            "51": "P2PSF851",
            "00": "P2PSF800",
            "20": "P2PSF820",
            "30": "P2PSF830",
            "40": "P2PSF840",
            "50": "P2PSF850",
            "60": "P2PSF860",
            "02": "P2PSF802",
            "03": "P2PSF803",
            "04": "P2PSF804",
            "05": "P2PSF805",
            "06": "P2PSF806"
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
            "33": "P2PSF1A33",
            "32": "P2PSF1A32",
            "13": "P2PSF1A13",
            "14": "P2PSF1A14",
            "15": "P2PSF1A15",
            "24": "P2PSF1A24",
            "31": "P2PSF1A31",
            "41": "P2PSF1A41",
            "42": "P2PSF1A42",
            "51": "P2PSF1A51",
            "00": "P2PSF1A00",
            "20": "P2PSF1A20",
            "30": "P2PSF1A30",
            "40": "P2PSF1A40",
            "50": "P2PSF1A50",
            "60": "P2PSF1A60",
            "02": "P2PSF1A02",
            "03": "P2PSF1A03",
            "04": "P2PSF1A04",
            "05": "P2PSF1A05",
            "06": "P2PSF1A06"    
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
            "33": "P2PSF2A33",
            "32": "P2PSF2A32",
            "13": "P2PSF2A13",
            "14": "P2PSF2A14",
            "15": "P2PSF2A15",
            "24": "P2PSF2A24",
            "31": "P2PSF2A31",
            "41": "P2PSF2A41",
            "42": "P2PSF2A42",
            "51": "P2PSF2A51",
            "00": "P2PSF2A00",
            "20": "P2PSF2A20",
            "30": "P2PSF2A30",
            "40": "P2PSF2A40",
            "50": "P2PSF2A50",
            "60": "P2PSF2A60",
            "02": "P2PSF2A02",
            "03": "P2PSF2A03",
            "04": "P2PSF2A04",
            "05": "P2PSF2A05",
            "06": "P2PSF2A06" 
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
            "33": "P2PSF3A33",
            "32": "P2PSF3A32",
            "13": "P2PSF3A13",
            "14": "P2PSF3A14",
            "15": "P2PSF3A15",
            "24": "P2PSF3A24",
            "31": "P2PSF3A31",
            "41": "P2PSF3A41",
            "42": "P2PSF3A42",
            "51": "P2PSF3A51",
            "00": "P2PSF3A00",
            "20": "P2PSF3A20",
            "30": "P2PSF3A30",
            "40": "P2PSF3A40",
            "50": "P2PSF3A50",
            "60": "P2PSF3A60",
            "02": "P2PSF3A02",
            "03": "P2PSF3A03",
            "04": "P2PSF3A04",
            "05": "P2PSF3A05",
            "06": "P2PSF3A06" 
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
            "33": "P2PSF4A33",
            "32": "P2PSF4A32",
            "13": "P2PSF4A13",
            "14": "P2PSF4A14",
            "15": "P2PSF4A15",
            "24": "P2PSF4A24",
            "31": "P2PSF4A31",
            "41": "P2PSF4A41",
            "42": "P2PSF4A42",
            "51": "P2PSF4A51",
            "00": "P2PSF4A00",
            "20": "P2PSF4A20",
            "30": "P2PSF4A30",
            "40": "P2PSF4A40",
            "50": "P2PSF4A50",
            "60": "P2PSF4A60",
            "02": "P2PSF4A02",
            "03": "P2PSF4A03",
            "04": "P2PSF4A04",
            "05": "P2PSF4A05",
            "06": "P2PSF4A06" 
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
            "33": "P2PSF6A33",
            "32": "P2PSF6A32",
            "13": "P2PSF6A13",
            "14": "P2PSF6A14",
            "15": "P2PSF6A15",
            "24": "P2PSF6A24",
            "31": "P2PSF6A31",
            "41": "P2PSF6A41",
            "42": "P2PSF6A42",
            "51": "P2PSF6A51",
            "00": "P2PSF6A00",
            "20": "P2PSF6A20",
            "30": "P2PSF6A30",
            "40": "P2PSF6A40",
            "50": "P2PSF6A50",
            "60": "P2PSF6A60",
            "02": "P2PSF6A02",
            "03": "P2PSF6A03",
            "04": "P2PSF6A04",
            "05": "P2PSF6A05",
            "06": "P2PSF6A06" 
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
            "32": "P2PSF8A32",
            "33": "P2PSF8A33",
            "13": "P2PSF8A13",
            "14": "P2PSF8A14",
            "15": "P2PSF8A15",
            "24": "P2PSF8A24",
            "31": "P2PSF8A31",
            "41": "P2PSF8A41",
            "42": "P2PSF8A42",
            "51": "P2PSF8A51",
            "00": "P2PSF8A00",
            "20": "P2PSF8A20",
            "30": "P2PSF8A30",
            "40": "P2PSF8A40",
            "50": "P2PSF8A50",
            "60": "P2PSF8A60",
            "02": "P2PSF8A02",
            "03": "P2PSF8A03",
            "04": "P2PSF8A04",
            "05": "P2PSF8A05",
            "06": "P2PSF8A06" 
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
            "33": "P2PSP133",
            "32": "P2PSP132",
            "13": "P2PSP113",
            "14": "P2PSP114",
            "15": "P2PSP115",
            "24": "P2PSP124",
            "31": "P2PSP131",
            "41": "P2PSP141",
            "42": "P2PSP142",
            "51": "P2PSP151",
            "00": "P2PSP100",
            "20": "P2PSP120",
            "30": "P2PSP130",
            "40": "P2PSP140",
            "50": "P2PSP150",
            "60": "P2PSP160",
            "02": "P2PSP102",
            "03": "P2PSP103",
            "04": "P2PSP104",
            "05": "P2PSP105",
            "06": "P2PSP106" 
            
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
            "33": "P2PSP233",
            "32": "P2PSP232",
            "13": "P2PSP213",
            "14": "P2PSP214",
            "15": "P2PSP215",
            "24": "P2PSP224",
            "31": "P2PSP231",
            "41": "P2PSP241",
            "42": "P2PSP242",
            "51": "P2PSP251",
            "00": "P2PSP200",
            "20": "P2PSP220",
            "30": "P2PSP230",
            "40": "P2PSP240",
            "50": "P2PSP250",
            "60": "P2PSP260",
            "02": "P2PSP202",
            "03": "P2PSP203",
            "04": "P2PSP204",
            "05": "P2PSP205",
            "06": "P2PSP206" 
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
            "33": "P2PSP333",
            "32": "P2PSP332",
            "13": "P2PSP313",
            "14": "P2PSP314",
            "15": "P2PSP315",
            "24": "P2PSP324",
            "31": "P2PSP331",
            "41": "P2PSP341",
            "42": "P2PSP342",
            "51": "P2PSP351",
            "00": "P2PSP300",
            "20": "P2PSP320",
            "30": "P2PSP330",
            "40": "P2PSP340",
            "50": "P2PSP350",
            "60": "P2PSP360",
            "02": "P2PSP302",
            "03": "P2PSP303",
            "04": "P2PSP304",
            "05": "P2PSP305",
            "06": "P2PSP306" 
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
            "33": "P2PSP433",
            "32": "P2PSP432",
            "13": "P2PSP413",
            "14": "P2PSP414",
            "15": "P2PSP415",
            "24": "P2PSP424",
            "31": "P2PSP431",
            "41": "P2PSP441",
            "42": "P2PSP442",
            "51": "P2PSP451",
            "00": "P2PSP400",
            "20": "P2PSP420",
            "30": "P2PSP430",
            "40": "P2PSP440",
            "50": "P2PSP450",
            "60": "P2PSP460",
            "02": "P2PSP402",
            "03": "P2PSP403",
            "04": "P2PSP404",
            "05": "P2PSP405",
            "06": "P2PSP406" 
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
            "33": "P2PSP633",
            "32": "P2PSP632",
            "13": "P2PSP613",
            "14": "P2PSP614",
            "15": "P2PSP615",
            "24": "P2PSP624",
            "31": "P2PSP631",
            "41": "P2PSP641",
            "42": "P2PSP642",
            "51": "P2PSP651",
            "00": "P2PSP600",
            "20": "P2PSP620",
            "30": "P2PSP630",
            "40": "P2PSP640",
            "50": "P2PSP650",
            "60": "P2PSP660",
            "02": "P2PSP602",
            "03": "P2PSP603",
            "04": "P2PSP604",
            "05": "P2PSP605",
            "06": "P2PSP606" 
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
            "33": "P2PSP833",
            "32": "P2PSP832",
            "13": "P2PSP813",
            "14": "P2PSP814",
            "15": "P2PSP815",
            "24": "P2PSP824",
            "31": "P2PSP831",
            "41": "P2PSP841",
            "42": "P2PSP842",
            "51": "P2PSP851",
            "00": "P2PSP800",
            "20": "P2PSP820",
            "30": "P2PSP830",
            "40": "P2PSP840",
            "50": "P2PSP850",
            "60": "P2PSP860",
            "02": "P2PSP802",
            "03": "P2PSP803",
            "04": "P2PSP804",
            "05": "P2PSP805",
            "06": "P2PSP806" 
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
            "12": "P2PSF1RR12",
            "10": "P2PSF1RR10",
            "01": "P2PSF1RR01",
            "21": "P2PSF1RR21",
            "23": "P2PSF1RR23",
            "22": "P2PSF1RR22",
            "33": "P2PSF1RR33",
            "32": "P2PSF1RR32",
            "13": "P2PSF1RR13",
            "14": "P2PSF1RR14",
            "15": "P2PSF1RR15",
            "24": "P2PSF1RR24",
            "31": "P2PSF1RR31",
            "41": "P2PSF1RR41",
            "42": "P2PSF1RR42",
            "51": "P2PSF1RR51",
            "00": "P2PSF1RR00",
            "20": "P2PSF1RR20",
            "30": "P2PSF1RR30",
            "40": "P2PSF1RR40",
            "50": "P2PSF1RR50",
            "60": "P2PSF1RR60",
            "02": "P2PSF1RR02",
            "03": "P2PSF1RR03",
            "04": "P2PSF1RR04",
            "05": "P2PSF1RR05",
            "06": "P2PSF1RR06"
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
            "33": "P2PSF2RR33",
            "32": "P2PSF2RR32",
            "13": "P2PSF2RR13",
            "14": "P2PSF2RR14",
            "15": "P2PSF2RR15",
            "24": "P2PSF2RR24",
            "31": "P2PSF2RR31",
            "41": "P2PSF2RR41",
            "42": "P2PSF2RR42",
            "51": "P2PSF2RR51",
            "00": "P2PSF2RR00",
            "20": "P2PSF2RR20",
            "30": "P2PSF2RR30",
            "40": "P2PSF2RR40",
            "50": "P2PSF2RR50",
            "60": "P2PSF2RR60",
            "02": "P2PSF2RR02",
            "03": "P2PSF2RR03",
            "04": "P2PSF2RR04",
            "05": "P2PSF2RR05",
            "06": "P2PSF2RR06"
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
            "12": "P2PSF3RR12",
            "10": "P2PSF3RR10",
            "01": "P2PSF3RR01",
            "21": "P2PSF3RR21",
            "23": "P2PSF3RR23",
            "22": "P2PSF3RR22",
            "33": "P2PSF3RR33",
            "32": "P2PSF1RR32",
            "13": "P2PSF1RR13",
            "14": "P2PSF1RR14",
            "15": "P2PSF1RR15",
            "24": "P2PSF1RR24",
            "31": "P2PSF1RR31",
            "41": "P2PSF1RR41",
            "42": "P2PSF1RR42",
            "51": "P2PSF1RR51",
            "00": "P2PSF1RR00",
            "20": "P2PSF1RR20",
            "30": "P2PSF1RR30",
            "40": "P2PSF1RR40",
            "50": "P2PSF1RR50",
            "60": "P2PSF1RR60",
            "02": "P2PSF1RR02",
            "03": "P2PSF1RR03",
            "04": "P2PSF1RR04",
            "05": "P2PSF1RR05",
            "06": "P2PSF1RR06"
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
            "12": "P2PSF4RR12",
            "10": "P2PSF4RR10",
            "01": "P2PSF4RR01",
            "21": "P2PSF4RR21",
            "23": "P2PSF4RR23",
            "22": "P2PSF4RR22",
            "33": "P2PSF4RR33",
            "32": "P2PSF4RR32",
            "13": "P2PSF4RR13",
            "14": "P2PSF4RR14",
            "15": "P2PSF4RR15",
            "24": "P2PSF4RR24",
            "31": "P2PSF4RR31",
            "41": "P2PSF4RR41",
            "42": "P2PSF4RR42",
            "51": "P2PSF4RR51",
            "00": "P2PSF4RR00",
            "20": "P2PSF4RR20",
            "30": "P2PSF4RR30",
            "40": "P2PSF4RR40",
            "50": "P2PSF4RR50",
            "60": "P2PSF4RR60",
            "02": "P2PSF4RR02",
            "03": "P2PSF4RR03",
            "04": "P2PSF4RR04",
            "05": "P2PSF4RR05",
            "06": "P2PSF4RR06"
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
            "33": "P2PSF6RR33",
            "12": "P2PSF6RR12",
            "32": "P2PSF6RR32",
            "13": "P2PSF6RR13",
            "14": "P2PSF6RR14",
            "15": "P2PSF6RR15",
            "24": "P2PSF6RR24",
            "31": "P2PSF6RR31",
            "41": "P2PSF6RR41",
            "42": "P2PSF6RR42",
            "51": "P2PSF6RR51",
            "00": "P2PSF6RR00",
            "20": "P2PSF6RR20",
            "30": "P2PSF6RR30",
            "40": "P2PSF6RR40",
            "50": "P2PSF6RR50",
            "60": "P2PSF6RR60",
            "02": "P2PSF6RR02",
            "03": "P2PSF6RR03",
            "04": "P2PSF6RR04",
            "05": "P2PSF6RR05",
            "06": "P2PSF6RR06"
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
            "33": "P2PSF8RR33",
            "33": "P2PSF8RR33",
            "33": "P2PSF8RR33",
            "32": "P2PSF8RR32",
            "13": "P2PSF8RR13",
            "14": "P2PSF8RR14",
            "15": "P2PSF8RR15",
            "24": "P2PSF8RR24",
            "31": "P2PSF8RR31",
            "41": "P2PSF8RR41",
            "42": "P2PSF8RR42",
            "51": "P2PSF8RR51",
            "00": "P2PSF8RR00",
            "20": "P2PSF8RR20",
            "30": "P2PSF8RR30",
            "40": "P2PSF8RR40",
            "50": "P2PSF8RR50",
            "60": "P2PSF8RR60",
            "02": "P2PSF8RR02",
            "03": "P2PSF8RR03",
            "04": "P2PSF8RR04",
            "05": "P2PSF8RR05",
            "06": "P2PSF8RR06"
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
            "33": "P2PSB1BT733",
            "32": "P2PSB1BT732",
            "13": "P2PSB1BT713",
            "14": "P2PSB1BT714",
            "15": "P2PSB1BT715",
            "24": "P2PSB1BT724",
            "31": "P2PSB1BT731",
            "41": "P2PSB1BT741",
            "42": "P2PSB1BT742",
            "51": "P2PSB1BT751",
            "00": "P2PSB1BT700",
            "20": "P2PSB1BT720",
            "30": "P2PSB1BT730",
            "40": "P2PSB1BT740",
            "50": "P2PSB1BT750",
            "60": "P2PSB1BT760",
            "02": "P2PSB1BT702",
            "03": "P2PSB1BT703",
            "04": "P2PSB1BT704",
            "05": "P2PSB1BT705",
            "06": "P2PSB1BT706"
            
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
            "12": "P2PSB2BT712",
            "32": "P2PSB2BT732",
            "13": "P2PSB2BT713",
            "14": "P2PSB2BT714",
            "15": "P2PSB2BT715",
            "24": "P2PSB2BT724",
            "31": "P2PSB2BT731",
            "41": "P2PSB2BT741",
            "42": "P2PSB2BT742",
            "51": "P2PSB2BT751",
            "00": "P2PSB2BT700",
            "20": "P2PSB2BT720",
            "30": "P2PSB2BT730",
            "40": "P2PSB2BT740",
            "50": "P2PSB2BT750",
            "60": "P2PSB2BT760",
            "02": "P2PSB2BT702",
            "03": "P2PSB2BT703",
            "04": "P2PSB2BT704",
            "05": "P2PSB2BT705",
            "06": "P2PSB2BT706",           
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
            "33": "P2PSB3BT733",
            "12": "P2PSBBT712",
            "32": "P2PSB3BT732",
            "13": "P2PSB3BT713",
            "14": "P2PSB3BT714",
            "15": "P2PSB3BT715",
            "24": "P2PSB3BT724",
            "31": "P2PSB3BT731",
            "41": "P2PSB3BT741",
            "42": "P2PSB3BT742",
            "51": "P2PSB3BT751",
            "00": "P2PSB3BT700",
            "20": "P2PSB3BT720",
            "30": "P2PSB3BT730",
            "40": "P2PSB3BT740",
            "50": "P2PSB3BT750",
            "60": "P2PSB3BT760",
            "02": "P2PSB3BT702",
            "03": "P2PSB3BT703",
            "04": "P2PSB3BT704",
            "05": "P2PSB3BT705",
            "06": "P2PSB3BT706"
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
            "12": "P2PSB4BT712",
            "33": "P2PSB4BT733",
            "32": "P2PSB4BT732",
            "13": "P2PSB4BT713",
            "14": "P2PSB4BT714",
            "15": "P2PSB4BT715",
            "24": "P2PSB4BT724",
            "31": "P2PSB4BT731",
            "41": "P2PSB4BT741",
            "42": "P2PSB4BT742",
            "51": "P2PSB4BT751",
            "00": "P2PSB4BT700",
            "20": "P2PSB4BT720",
            "30": "P2PSB4BT730",
            "40": "P2PSB4BT740",
            "50": "P2PSB4BT750",
            "60": "P2PSB4BT760",
            "02": "P2PSB4BT702",
            "03": "P2PSB4BT703",
            "04": "P2PSB4BT704",
            "05": "P2PSB4BT705",
            "06": "P2PSB4BT706",           
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
            "12": "P2PSB6BT712",
            "23": "P2PSB6BT723",
            "22": "P2PSB6BT722",
            "33": "P2PSB6BT733",
            "32": "P2PSB6BT732",
            "13": "P2PSB6BT713",
            "14": "P2PSB6BT714",
            "15": "P2PSB6BT715",
            "24": "P2PSB6BT724",
            "31": "P2PSB6BT731",
            "41": "P2PSB6BT741",
            "42": "P2PSB6BT742",
            "51": "P2PSB6BT751",
            "00": "P2PSB6BT700",
            "20": "P2PSB6BT720",
            "30": "P2PSB6BT730",
            "40": "P2PSB6BT740",
            "50": "P2PSB6BT750",
            "60": "P2PSB6BT760",
            "02": "P2PSB6BT702",
            "03": "P2PSB6BT703",
            "04": "P2PSB6BT704",
            "05": "P2PSB6BT705",
            "06": "P2PSB6BT706",
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
            "33": "P2PSB8BT733",
            "32": "P2PSB6BT732",
            "13": "P2PSB6BT713",
            "14": "P2PSB6BT714",
            "15": "P2PSB6BT715",
            "24": "P2PSB6BT724",
            "31": "P2PSB6BT731",
            "41": "P2PSB6BT741",
            "42": "P2PSB6BT742",
            "51": "P2PSB6BT751",
            "00": "P2PSB6BT700",
            "20": "P2PSB6BT720",
            "30": "P2PSB6BT730",
            "40": "P2PSB6BT740",
            "50": "P2PSB6BT750",
            "60": "P2PSB6BT760",
            "02": "P2PSB6BT702",
            "03": "P2PSB6BT703",
            "04": "P2PSB6BT704",
            "05": "P2PSB6BT705",
            "06": "P2PSB6BT706",
            "33": "P2PSB6BT733"
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
