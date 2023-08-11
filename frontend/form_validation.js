```javascript
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var otp = document.getElementById('otp').value;
    var magicLink = document.getElementById('magicLink').value;

    if(username && password) {
        return validateUsernamePassword(username, password);
    } else if(email && otp) {
        return validateEmailOTP(email, otp);
    } else if(email && magicLink) {
        return validateEmailMagicLink(email, magicLink);
    } else {
        displayFeedbackMessage('Invalid form data. Please check your inputs.');
        return false;
    }
}

function validateUsernamePassword(username, password) {
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!usernameRegex.test(username)) {
        displayFeedbackMessage('Invalid username. Only alphanumeric characters are allowed.');
        return false;
    }

    if(!passwordRegex.test(password)) {
        displayFeedbackMessage('Invalid password. Must contain at least one letter, one number, and be at least 8 characters long.');
        return false;
    }

    return true;
}

function validateEmailOTP(email, otp) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var otpRegex = /^[0-9]{6}$/;

    if(!emailRegex.test(email)) {
        displayFeedbackMessage('Invalid email. Please check your input.');
        return false;
    }

    if(!otpRegex.test(otp)) {
        displayFeedbackMessage('Invalid OTP. It should be a 6-digit number.');
        return false;
    }

    return true;
}

function validateEmailMagicLink(email, magicLink) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var magicLinkRegex = /^https?:\/\/[\S]+$/;

    if(!emailRegex.test(email)) {
        displayFeedbackMessage('Invalid email. Please check your input.');
        return false;
    }

    if(!magicLinkRegex.test(magicLink)) {
        displayFeedbackMessage('Invalid magic link. It should be a valid URL.');
        return false;
    }

    return true;
}
```