//packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//port
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);



//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`);

});