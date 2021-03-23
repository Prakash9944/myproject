const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.tokenGenerator = async function (email) {

    try {
        const token = await jwt.sign({email}, process.env.JWT_KEY, {expiresIn: "3hours"});
        return token;
    } catch (err) {

    }
}

exports.tokenValidator = async function (token) {

    try {
        const data = await jwt.verify(token, process.env.JWT_KEY);
        console.log("data", data)
        return data;
    } catch (err) {
        return false;
    }
}