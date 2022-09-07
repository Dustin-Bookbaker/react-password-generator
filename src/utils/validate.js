// validates input to match at least 8 chars, 1 upper and lower letter, 1 number and 1 special char
const validate = (password) => {
    const regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&*+-.:;=?@_])(?=.{8,})");
    return regEx.test(password);
}

export default validate;