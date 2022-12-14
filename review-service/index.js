import app from "./server.js";
import dotenv from "dotenv";
import path from "path";
import express from "express";

const __dirname = path.resolve();

dotenv.config();

const port = process.env.PORT || 8080;

// Setting up here this route for halth checks be fine
app.get("/", (req, res) => {
  res.send("Hi there! This is main BE");
});

// app.use(express.static(path.join(__dirname, "client", "build")))
//
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(port, () => console.log(`Server started on port ${port}`));
