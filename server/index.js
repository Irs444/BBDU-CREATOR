const express = require("express")

const app = express();
const cors = require('cors');

const port = 5000;

const UserRouter = require("./router/userRouter")

const ProjectRouter = require("./router/projectRouter")
const UtilRouter = require("./router/util")
const FeedbackRouter = require("./router/feedbackRouter")
const ContactRouter = require("./router/contactRouter")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);

app.use("/projects", ProjectRouter);
app.use("/util", UtilRouter);
app.use("/feedback", FeedbackRouter);
app.use("/contact", ContactRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => {
    console.log("Server Started");
})
