const express = require("express");
const path = require("path");

const app = express();

let port = 8080;

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

app.listen(port , () => {
    console.log(`The port is required is ${port}`);
});

app.get("/" , (req , res) => {
    let data = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs" , {data});
});

app.get("/ig/:username" , (req,res) => {
    let { username } = req.params;
      const instaData = require("./data.json");
      const data = instaData[username];
      console.log(data);
      res.render("instagram.ejs" , {data});
});