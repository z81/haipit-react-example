const loadedImages = [];
let lastImageLoadTime = 0;

const loadedImagSetAuthoHeight = () => {
  loadedImages.forEach(m => {
    m.style.height = "auto";
  });
};

window.imgFixLoader = element => {
  loadedImages.push(element);
  if (Date.now() - lastImageLoadTime > 500) {
    loadedImages.forEach(m => {
      m.style.height = "auto";
    });
  }

  lastImageLoadTime = +Date.now();
  setTimeout(loadedImagSetAuthoHeight, 500);
};