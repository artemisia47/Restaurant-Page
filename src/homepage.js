import interiorImageSrc1 from './interior.jpg';
import interiorImageSrc2 from './orange.jpg';
import interiorImageSrc3 from './tea2.jpg';

export function loadHomepage() {
  const contentDiv = document.getElementById('content');
  
  //  container div for the homepage content
  const homepageContent = document.createElement('div');
  homepageContent.classList.add('homepage-content');

  // header with a welcome message
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Our Restaurant!';
  header.classList.add('homepage-header');

  
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');

  
  const images = [interiorImageSrc1, interiorImageSrc2, interiorImageSrc3];
  const carouselImages = document.createElement('div');
  carouselImages.classList.add('carousel-images');

  images.forEach((imageSrc, index) => {
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = `Restaurant Interior ${index + 1}`;
    image.classList.add('carousel-image');
    carouselImages.appendChild(image);
  });

  
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Prev';
  prevButton.classList.add('carousel-prev');
  
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.classList.add('carousel-next');

  
  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(carouselImages);
  carouselContainer.appendChild(nextButton);

  
  homepageContent.appendChild(header);
  homepageContent.appendChild(carouselContainer);
  
  contentDiv.appendChild(homepageContent);

  
  let currentIndex = 0;
  const totalImages = 3;

  
  const showImage = (index) => {
    const images = carouselImages.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
      img.style.display = (i === index) ? 'block' : 'none';
    });
  };

  
  showImage(currentIndex);


  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  });

  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  });


  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }, 3000);
}
