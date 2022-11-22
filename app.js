//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

let text =[];
app.get("/",function(req, res){
    var date = new Date();
    var options = {
        weekday:"long",
        day: "numeric",
        month: "long"
    }
    var day = date.toLocaleDateString("en-US", options);
    res.render("list", {listtitle: day, listitem: text})

})
app.post("/", function(req, res){
    var texts = req.body.text;
    text.push(texts)
    res.redirect("/")
}) 


app.listen(process.env.PORT||4000, function(){
    console.log("hello")
})