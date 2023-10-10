// ---------------------------------------------------
// CONFIG SETUP - Database
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require("mongoose");
const db_name = "cocktailPlanner_db"

// 2) Setting connection to Mongo DB using 'mongoose' instance
mongoose.connect(`mongodb://0.0.0.0/${db_name}`, {
	useNewUrlParser: true, // Avoids deprecation warnings -> enables new MongoDB connection string parser
	useUnifiedTopology: true, // Avoids connection errors -> enables new unified topology engine for MongoDB Node.js driver
})
    .then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));