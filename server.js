import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

//App Config
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assests on Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Add routes
app.use(routes);

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearchdb",
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
  )
  .catch((err) => console.log(err));

 // Start API server
 app.listen(PORT, function() {
     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
 });
