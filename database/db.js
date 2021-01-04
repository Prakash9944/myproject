const mongoose = require ("mongoose");
const dotenv = require('dotenv').config();

var connectDB = async function () {

    await mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
        if (err) {
            console.error(err)
        }

        console.log("DB connected....");
    });
}

module.exports = connectDB;