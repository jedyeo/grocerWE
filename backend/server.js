require('dotenv').config()

// Initialize Express
const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const groupRouter = require("./routes/group");
const listRouter = require("./routes/list");
const itemRouter = require("./routes/item");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use('/group', groupRouter);
app.use('/list', listRouter);
app.use('/item', itemRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

// Debug route
app.use('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

// Connect to database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listen on PORT
const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});