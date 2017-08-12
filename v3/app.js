var express = require("express"), 
    app = express(), 
    bodyParser = require("body-parser"), 
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 
seedDB();




app.get("/", function(req, res){
    res.render("landing");
});

//index- show all campgrounds
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds: campgrounds})
        }
    });
});

//new- show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//create- adds campground to database
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    Campground.create({
        name: name, 
        image: image,
        description: description
    }, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.redirect("/campgrounds");
        }
    });
});

//show - shows info about one campground
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err)
        } else {
            console.log(foundCampground);
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server is running");
});