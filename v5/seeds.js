var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
    
var data = [
    {
        name: "Cloud's Rest",
        image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5253636.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ut mauris ut auctor. Aenean vel consectetur sapien. Nunc ac lectus arcu. Aenean blandit sodales mauris, id pellentesque eros efficitur in. Phasellus finibus sed ex nec ultrices. Proin facilisis dignissim porttitor. Nulla sed consequat tellus. Integer efficitur condimentum dui sed varius. Vivamus nulla nunc, vulputate et sodales eu, mollis congue nisi. Nulla sagittis, sapien quis iaculis porta, lectus ligula cursus eros, eu rhoncus mi risus ac metus. Suspendisse potenti."
    },
    {
        name: "Lake Laky",
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ut mauris ut auctor. Aenean vel consectetur sapien. Nunc ac lectus arcu. Aenean blandit sodales mauris, id pellentesque eros efficitur in. Phasellus finibus sed ex nec ultrices. Proin facilisis dignissim porttitor. Nulla sed consequat tellus. Integer efficitur condimentum dui sed varius. Vivamus nulla nunc, vulputate et sodales eu, mollis congue nisi. Nulla sagittis, sapien quis iaculis porta, lectus ligula cursus eros, eu rhoncus mi risus ac metus. Suspendisse potenti."
    },
    {
        name: "Forbidden Forest",
        image: "http://avaloncampground.com/wp-content/uploads/2013/07/Avalon-Campground-table-woods.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ut mauris ut auctor. Aenean vel consectetur sapien. Nunc ac lectus arcu. Aenean blandit sodales mauris, id pellentesque eros efficitur in. Phasellus finibus sed ex nec ultrices. Proin facilisis dignissim porttitor. Nulla sed consequat tellus. Integer efficitur condimentum dui sed varius. Vivamus nulla nunc, vulputate et sodales eu, mollis congue nisi. Nulla sagittis, sapien quis iaculis porta, lectus ligula cursus eros, eu rhoncus mi risus ac metus. Suspendisse potenti."
    },
]    
    
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            });
                    }
                })
            });
        }
    });
    
    
}    

module.exports = seedDB;
