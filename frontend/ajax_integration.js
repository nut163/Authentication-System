```javascript
function sendAjaxRequest(authMethod, inputData) {
    let url;
    switch(authMethod) {
        case 'username/password':
            url = '/backend/authentication.cfc?method=handleUsernamePassword';
            break;
        case 'OTP email':
            url = '/backend/authentication.cfc?method=handleOtpEmail';
            break;
        case 'magic link':
            url = '/backend/authentication.cfc?method=handleMagicLink';
            break;
        case 'SSO':
            url = '/backend/authentication.cfc?method=handleSso';
            break;
        case 'Google':
            url = '/backend/authentication.cfc?method=handleGoogleAuth';
            break;
        default:
            console.error('Invalid authentication method');
            return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayFeedbackMessage(response);
        }
    };
    xhr.send(JSON.stringify(inputData));
}
```