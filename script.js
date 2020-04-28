function simpleMessage() {
    alert("je suis une simple alerte !");
}

var myImage = document.getElementById("imagedr");
var imageArray = ["images/ski6.jpg", "images/ski1.jpg", "images/ski2.jpg", "images/ski3.jpg", "images/ski4.jpg", "images/ski5.jpg"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
var imageInterval = setInterval(changeImage, 5000);
