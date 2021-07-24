const express = require("express");
const path = require("path")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/api");

const session = require('express-session');
const sess = {
    secret: 'Top Secrect',
    cookie: {},
    resave: false,
    saveUninitialized: true,
}
app.use(session(sess));

//Define Middleware here
app.use (express.urlencoded({ extended: true }));
app.use(express.json());
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/db_dcComics",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    }
);

//Add routes, both API and view
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

