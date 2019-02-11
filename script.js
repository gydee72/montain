function simpleMessage() {
    alert("je suis une simple alerte !");
}

var myImage = document.getElementById("imagedr");
var imageArray = ["images/mont1.jpg", "images/mont3.jpg", "images/mont4.jpg", "images/mont13.jpg", "images/mountain.jpg", "images/neige4.jpg"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
var imageInterval = setInterval(changeImage, 5000);
