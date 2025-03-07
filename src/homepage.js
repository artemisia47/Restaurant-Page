import interiorImageSrc from './interior.jpg';  

export function loadHomepage() {
  const contentDiv = document.getElementById('content');
  
  //  container div for the homepage content
  const homepageContent = document.createElement('div');
  homepageContent.classList.add('homepage-content');

  // header with a welcome message
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Our Restaurant!';
  header.classList.add('homepage-header');

  
  const imageTextContainer = document.createElement('div');
  imageTextContainer.classList.add('image-text-container');

  //  image element
  const image = document.createElement('img');
  image.src = interiorImageSrc;  // Set the dynamically imported image path
  image.alt = 'Restaurant Interior';
  image.classList.add('homepage-image');

  //  text content
  const text = document.createElement('div');
  text.classList.add('homepage-text');
  text.innerHTML = `
    <p>Come and enjoy the best dishes in town. Our secret recipes have been passed down for generations!</p>
  `;

  
  imageTextContainer.appendChild(image);
  imageTextContainer.appendChild(text);

  
  homepageContent.appendChild(header);
  homepageContent.appendChild(imageTextContainer);

 
  contentDiv.appendChild(homepageContent);
}
