import contactImg from './logo.png';  

export function loadContact() {
    const contentDiv = document.getElementById('content');
    
    // Clear the content div 
    contentDiv.innerHTML = '';
    
    //  contact section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    
    // heading for contact information
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    
    //  contact details inside a div
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
      <p class="contact-text">📍 Address: 123 Food Avenew, Food City</p>
      <p class="contact-text">📞 Phone: 123-456-7890</p>
      <p class="contact-text">📧 Email: info@secretrecipes.com</p>
    `;
    
    //  image element for contact section
    const imageElement = document.createElement('img');
    imageElement.src = contactImg;  
    imageElement.alt = 'Contact Image';  
    imageElement.classList.add('contact-image'); 
    
    // Append the contact info and image to the contact section
    contactSection.appendChild(heading);
    contactSection.appendChild(contactInfo);
    contactSection.appendChild(imageElement);  
    
   
    contentDiv.appendChild(contactSection);
}
