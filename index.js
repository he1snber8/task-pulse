// index.js
const express = require("express");
const app = express();
app.use(express.json());
// TODO: mount routes
app.listen(3000, ()=> console.log("Server running on port 3000"));