// Image and text rotate

// Get elements

// let image = document.getElementById("changing-image");
let text = document.getElementById("category-text");

// Lists
let textList = ["Art", "Cars", "Sneakers", "Games", "Handbags", "Watches", "Comics", "Books", "Music", "Film", "Antiques", "Sports"];

// let imgList = [
//   "./pictures/phone-art.png",
//   "./pictures/phone-wine.png",
//   "./pictures/phone-games.png",
//   "./pictures/phone-cars.png",
//   "./pictures/phone-art.png",
//   "./pictures/phone-wine.png",
//   "./pictures/phone-games.png",
//   "./pictures/phone-cars.png",
//   "./pictures/phone-art.png",
//   "./pictures/phone-wine.png",
//   "./pictures/phone-games.png",
//   "./pictures/phone-cars.png",
//   "./pictures/phone-art.png",
//   "./pictures/phone-wine.png"
// ];

// Loop

// var images = [];
// function preload() {
//   for (var i = 0; i < arguments.length; i++) {
//     images[i] = new Image();
//     images[i].src = preload.arguments[i];
//   }
// }

// preload(
//   "./pictures/phone-wine.png",
//   "./pictures/phone-art.png",
//   "./pictures/phone-cars.png",
//   "./pictures/phone-fashion.png",
//   "./pictures/phone-games.png"
// );

let currentPosition = 0
setInterval(function () {
  changeCategory(currentPosition)
  currentPosition++
  if (currentPosition > textList.length - 1) {
    currentPosition = 0
  }
}, 1200)

// Repeat for second one

let text2 = document.getElementById("category-text-desktop");

let currentPosition2 = 0
setInterval(function () {
  changeCategory(currentPosition2)
  currentPosition2++
  if (currentPosition2 > textList.length - 1) {
    currentPosition2 = 0
  }
}, 1200)

function changeCategory(position) {
  text.innerHTML = "" + textList[position] + "."
  text2.innerHTML = "" + textList[position] + "."
}
