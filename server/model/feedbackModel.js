const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: String,
    email: String,
    feedback: String

});

module.exports = model("feedback", myschema);