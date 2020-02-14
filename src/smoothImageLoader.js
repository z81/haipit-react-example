const loadedImages: HTMLImageElement[] = [];
let lastImageLoadTime = 0;

const loadedImagSetAutoHeight = () => {
  loadedImages.forEach(m => {
    m.style.height = "auto";
  });
};

window.imgFixLoader = (element: HTMLImageElement) => {
  loadedImages.push(element);
  if (Date.now() - lastImageLoadTime > 500) {
    loadedImages.forEach(m => {
      m.style.height = "auto";
    });
  }

  lastImageLoadTime = +Date.now();
  setTimeout(loadedImagSetAutoHeight, 500);
};