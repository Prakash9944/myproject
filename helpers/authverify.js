const tokenValidation = require("./token");


exports.tokenVerify = async function (req, res, next) {

    try {

        const {jwt} = req.cookies;
        var valid = await tokenValidation.tokenValidator(jwt);

        if(valid) {
            next();
        } else {
            res.send("access denied");
        }
    } catch (err) {
        return false;
    }

}