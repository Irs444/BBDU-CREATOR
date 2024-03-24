const express = require("express")

const app = express();
const cors = require('cors');

const port = 5000;

const UserRouter = require("./router/userRouter")
const AdminRouter = require("./router/adminRouter")
const ProjectRouter = require("./router/projectRouter")
const UtilRouter = require("./router/util")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/projects", ProjectRouter);
app.use("/util", UtilRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => {
    console.log("Server Started");
})
