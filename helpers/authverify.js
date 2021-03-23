const tokenValidation = require("./token");


exports.tokenVerify = async function (req, res, next) {

    try {

        const {jwt} = req.cookies;
        console.log("req.cookies;req.cookies;req.cookies;", req.headers)
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