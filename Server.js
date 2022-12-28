const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoutes");
const app = express();
app.use(express.json());
app.use(cors());



mongoose.set('strictQuery',false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.error(err));

app.use(routes);
app.listen(5000, () => {
    console.log('App listening on port 5000');
})