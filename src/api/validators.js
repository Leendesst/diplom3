

export const validateEmail = email => {
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,}){1,}$/;
    return re.test(String(email).toLowerCase())?false:'Неверный формат e-mail';
}