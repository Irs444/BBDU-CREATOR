const {Schema, model} = require("../connection")

const myschema = new Schema({
    title: String,
    description: String,
    language: String,
    course: String,
    year: String,
    image: String,
    video:  String,
    department: String,
    verified: {type: Boolean , default: false}
   
})

module.exports = model("projects", myschema);