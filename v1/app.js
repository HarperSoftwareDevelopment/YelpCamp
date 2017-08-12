var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Samon Creek", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg/250px-Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"},
        {name: "Bluegil Creek", image: "http://www.active.com/Assets/Outdoors/370/lakeside-campsite.jpg"},
        {name: "Ruby Rock", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"} 
    ];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server is running");
});