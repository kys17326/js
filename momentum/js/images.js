const images = ["초고도화 문명.jpg", "사이버 펑크.jpg", "베가 펑크.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// document.body.prepend(bgImage);