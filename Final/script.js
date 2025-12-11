
function setupEventListeners() {
    
    document.getElementById('name').addEventListener('input', function() {
        validateField('name');
    });
    document.getElementById('email').addEventListener('input', function() {
        validateField('email');
    });
    document.getElementById('password').addEventListener('input', function() {
        validateField('password');
    });
    document.getElementById('confirm-password').addEventListener('input', function() {
        validateField('confirm-password');
    });

    
    document.getElementById('address').addEventListener('input', function() {
        validateField('address');




    });
    document.getElementById('tc').addEventListener('change', function() {



        validateField('tc');


    });
}
























function validateForm() {
    let isValid = true;

   
    if (!validateField('name')) isValid = false;
    if (!validateField('email')) isValid = false;
    if (!validateField('password')) isValid = false;
    if (!validateField('confirm-password')) isValid = false;
    if (!validateField('address')) isValid = false;
    if (!validateField('tc')) isValid = false;

    return isValid;
}

function validateField(field) {
    var value = document.getElementById(field).value;
    var errorElement = document.getElementById(field + '-error');
    var isValid = true;

    switch (field) {
        case 'name':
            if (value.trim() === "") {
                errorElement.textContent = "Name cannot be empty.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        case 'email':
            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(value)) {
                errorElement.textContent = "Please enter a valid email address.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        case 'password':
            if (value.length < 8) {
                errorElement.textContent = "Password must be at least 8 characters long.";
                isValid = false;
            } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value)) {
                errorElement.textContent = "Password must contain at least one uppercase letter, one number, and one special character.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        case 'confirm-password':
            if (value !== document.getElementById('password').value) {
                errorElement.textContent = "Passwords do not match.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        case 'address':
            if (value.trim() === "") {
                errorElement.textContent = "Address cannot be empty.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        case 'tc':
            if (!document.getElementById('tc').checked) {
                errorElement.textContent = "You must agree to the Terms and Conditions.";
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
            break;

        default:
            break;
    }

    return isValid;
}
