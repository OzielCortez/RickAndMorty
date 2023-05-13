const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validLettersNumbers = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
export default function validate(userData){
    const errors = {};
    if(!regexEmail.test(userData.email)) errors.email = "Ingresa un email válido";
    if(!userData.email) errors.email = "El usuario no puede estar vacío";
    if(userData.email?.length > 35) errors.email = "El email debe ser más corto";

    if(userData.password.length < 6 || userData.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    if(!validLettersNumbers.test(userData.password)) errors.password = "La contraseña debe incluir un número al menos";
    console.log(errors);
    return errors;
}