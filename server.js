/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const staticRoutes = require("./routes/static");

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Asegúrate de que las vistas estén en el directorio correcto
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Routes
 *************************/
app.use(staticRoutes);

/* Index route
*************************/
app.get("/", function(req, res){
  res.render("index" , {title: "Home"})
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || 'localhost';

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, host, () => {
  console.log(`app listening on ${host}:${port}`);
});

/* ***********************
 * Error Handling
 *************************/
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});