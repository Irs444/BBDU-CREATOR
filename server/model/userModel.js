const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: String,
    email: String,
    password: String,
    
    createdAt : {
        type : Date,
        default: Date.now()
    },
    avatar: {type:String, default: "avatar_placeholder.png"},
    role : {type:String, default: "user"}

});

module.exports = model("user", myschema );