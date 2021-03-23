const User = require("../../models/User");
const hashing = require ("../../helpers/hashing");
const tokenGen = require ("../../helpers/token");
const authVerify= require ("../../helpers/authverify");



exports.updateUser = function (req, res) {

    if (req.body.user)

    User.findOneAndUpdate()
}