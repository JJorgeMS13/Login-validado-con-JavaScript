const formulario = document.getElementById('dkh-signup-form');

function validateEmail(email) {
    if (!email) return 'El email es requerido';

    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!isValidEmail.test(email)) {
        return 'Por favor introduzca un email valido';
    }
    return '';
}
 function validatePassword(password) {
    if(!password) return "La contraseña es requerida";
    if (password.length < 10) {
        return "La contraseña debe tener minimo 10 caracteres";
    }
    const letterCapital = /[A-Z]/.test(password);
    if(!letterCapital) return 'Tu password debe tener al menos 1 letra Mayuscula.'

    const specialCharacter = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    if(!specialCharacter) return 'La password debe tener almenos un caracter especial.';
    
    return '';
 }
function handleSubmit(e) {
    e.preventDefault();
    const emailElementError = document.getElementById('erroMessageEmail');
    const passwordElementError = document.getElementById('erroMessagePassword');

    const formData = new FormData(formulario).entries();
    const { email, password } = Object.fromEntries(formData);

    const emailErrorMessage = validateEmail(email);  
    const passwordErrorMessage = validatePassword(password);
    
    if (emailErrorMessage) {
        emailElementError.innerText = emailErrorMessage;
        return;
    }else {
        emailElementError.innerText = emailErrorMessage;
    }
    if (passwordErrorMessage) {
        passwordElementError.innerText = passwordErrorMessage;
        return;
    }
    else {
        passwordElementError.innerText = passwordErrorMessage;
    }
   
    
}

formulario.addEventListener('submit', handleSubmit);