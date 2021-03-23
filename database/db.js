const mongoose = require ("mongoose");
const dotenv = require('dotenv').config();

var connectDB = async function () {

    try {
        await mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
            if (err) {
                console.error(err)
            }
        });

    } catch (err) {
        return res.send(err)
    }
}

module.exports = connectDB;