const User = require('../../models/User');
const hashing = require ("../../helpers/hashing");
const tokenGen = require ("../../helpers/token");
const authVerify= require ("../../helpers/authverify");

exports.createUser = async function (req, res) {

    if (!req.body.username) {return res.send("username is required")};
    if (!req.body.email) {return res.send("email is required")};
    if (!req.body.password) {return res.send("password is required")};
    if (!req.body.phone) {return res.send("phone is required")};
    if (!req.body.company) {return res.send("company is required")};
    if (!req.body.role) {return res.send("password is required")};

    const hashedPassword = await hashing.hashGenerate(req.body.password);
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password:  hashedPassword,
        role: req.body.role,
        company: req.body.company,
        phone : req.body.phone
    });

    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser)
    } catch(err) {
        res.status(500).send("Internal server");
    }
}


exports.signInUser = async function (req, res) {

    if (!req.body.email) {return res.send("email is required")};
    if (!req.body.password) {return res.send("password is required")};

    try {
            var existingUser = await User.findOne({email: req.body.email});
            if (!existingUser) {
                return res.send("user not found");

            } else {

                var checkPassword = await hashing.hashValidatePassword(req.body.password, existingUser.password);

                if (!checkPassword) {
                    res.send(" Password is invalid");
                } else {
                    var token = await tokenGen.tokenGenerator(existingUser.email);
                    res.cookie("jwt", token)
                    res.status(200).send(token);
                }
            }

    } catch (err) {
        res.send(err);
    }
}

exports.getCall = function (req, res) {
    res.send("I am Protected");
}