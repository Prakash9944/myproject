const mongoose = require ("mongoose");
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
// console.log("mongooseFieldEncryption", mongooseFieldEncryption)

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phone: Number,
    address: String,
    role: {
        type: String,
        "enum": [
            "admin" ,
            "user",
            "owner"
        ],
        "default": "user"
    }
});

userSchema.plugin(mongooseFieldEncryption, { fields: ["phone", "email"], secret: "nodejs" });
module.exports = mongoose.model("User", userSchema);