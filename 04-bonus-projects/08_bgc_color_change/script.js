const changeBtn = document.getElementById("colorButton");

const images = [
  "https://source.unsplash.com/random/1920x1080",
  "https://picsum.photos/1920/1080",
  "https://cdn.pixabay.com/photo/2024/05/19/13/27/daisies-8772617_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/03/21/33/butterfly-8428279_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/08/09/33/jellyfish-7704800_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/26/17/09/flower-7952950_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/07/02/19/58/chamomile-8102907_1280.jpg"
];

function random_bg_change() {
    let randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Create a new Image object to load it first
    let img = new Image();
    img.src = randomImage;

    img.onload = function () {
        document.body.style.background = `url('${randomImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
    };

    img.onerror = function () {
        console.error("Failed to load image:", randomImage);
    };
}

changeBtn.addEventListener("click", random_bg_change);
