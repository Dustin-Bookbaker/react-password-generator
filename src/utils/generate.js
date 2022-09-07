// Generate a random Password with at least 1 upper and lower case letter, 1 number and 1 special character
const generate = (length) => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();
    const nums = "1234567890"
    const specials = "!#$%&*+-.:;=?@_"
    const all = lower + upper + nums + specials;

    var password = '';
    // add one of each minimum requirement
    password += lower.charAt(Math.floor(Math.random() * lower.length));
    password += upper.charAt(Math.floor(Math.random() * upper.length));
    password += nums.charAt(Math.floor(Math.random() * nums.length));
    password += specials.charAt(Math.floor(Math.random() * specials.length));
    // add remaining chars randomly from all possible chars
    for (var i = 0; i < length - 4; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
    }
    // shuffle result
    password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
    console.log(password);
    return password;
}

export default generate;