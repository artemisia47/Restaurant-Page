import './styles.css';
import logoSrc from './logo.png';
import { loadHomepage } from './homepage';
import { loadMenu } from './menu';
import { loadContact } from './contact';


function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = '© 2025 Mica\'s Secret Recipe | All rights reserved';
  return footer;
}


function loadPage(pageFunction) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear previous content
  pageFunction(); // Load the selected page
  document.body.appendChild(createFooter()); // Append the footer
}

// Load Homepage by default
window.onload = () => {
    const logo = document.getElementById('logo');
    logo.src = logoSrc; // Dynamically set the logo image source
  
  loadPage(loadHomepage);

  // Event listeners for navigation buttons
  document.getElementById('homeBtn').addEventListener('click', () => loadPage(loadHomepage));
  document.getElementById('menuBtn').addEventListener('click', () => loadPage(loadMenu));
  document.getElementById('aboutBtn').addEventListener('click', () => loadPage(loadContact));

  logo.addEventListener('click', () => loadPage(loadHomepage));
};
