
document.addEventListener("DOMContentLoaded",
function(){

    alert("Hello World!");
    //console.log("JEUUUU");

    let myPhoto =
    document.getElementById("personal-image")

    myPhoto.addEventListener("click", changeImage)

    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == "file:///Users/girlswhocode2018/development/AboutMeWebsite/hike.jpg"){
        myPhoto.src = "prom.jpg";
    }else {
    myPhoto.src="hike.jpg"
    }
    }
})// END OF DOM CONTENT LOADED
