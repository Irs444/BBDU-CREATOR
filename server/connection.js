const mongoose = require("mongoose")

const url = "mongodb+srv://irs786had123:irshad@cluster0.82yikc9.mongodb.net/BBDU?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log("Server Connected");
}).catch((err) => {
    console.error("err")
});

module.exports = mongoose;