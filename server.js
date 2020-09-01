const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`);
  
});