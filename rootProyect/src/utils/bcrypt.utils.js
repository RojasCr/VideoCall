const bcrypt = require("bcrypt");

const hashPass = (password) => {

    const round = 10;
    const salt = bcrypt.genSaltSync(round);

    const hashedPass = bcrypt.hashSync(password, salt);

    return hashedPass;
}

const comparePass = (password, hashedPass) => {
    const comparedPass = bcrypt.compareSync(password, hashedPass);

    return comparedPass;
} 

module.exports = { hashPass, comparePass };