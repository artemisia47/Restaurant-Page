import teaImage from './tea.jpg';  

export function loadMenu() {
  const contentDiv = document.getElementById('content');
  
  
  contentDiv.innerHTML = '';
  
  
  const menuSection = document.createElement('section');
  menuSection.id = 'menu';
  
 
  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';
  
  // Array of dishes
  const dishes = [
    {
      name: 'Chicken with Fries',
      description: 'Crispy chicken served with golden fries.',
      image: 'https://img.freepik.com/premium-vector/drawing-fried-chicken-fries-plate-with-cartoon-drawing-chicken-fries_889056-157070.jpg?w=360',
    },
    {
      name: 'Steak',
      description: 'Juicy steak cooked to perfection.',
      image: 'https://img.freepik.com/premium-vector/drawing-steak-plate-with-picture-steak-it_889056-169591.jpg?w=360',
    },
    {
      name: 'Grilled Fish',
      description: 'Delicious grilled fish with a hint of rosemary.',
      image: 'https://media.istockphoto.com/id/1323177518/vector/grilled-fish-with-rosemary-and-lemon.jpg?s=612x612&w=0&k=20&c=JafoZPXjjAuJzM7sqpBbzvmUHtltftcBKiaSbxpZ8Qs=',
    }
  ];
  

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  
  // Loop through dishes for creating new elements
  dishes.forEach(dish => {
    const dishDiv = document.createElement('div');
    dishDiv.classList.add('menu-item');
    
    //  (h3)
    const dishName = document.createElement('h3');
    dishName.textContent = dish.name;
    
    //  dish description element (p)
    const dishDescription = document.createElement('p');
    dishDescription.textContent = dish.description;
    
    //  image element for the dish
    const dishImage = document.createElement('img');
    dishImage.src = dish.image;
    dishImage.alt = dish.name;
    
    // Append the name, description, and image to the dish div
    dishDiv.appendChild(dishName);
    dishDiv.appendChild(dishDescription);
    dishDiv.appendChild(dishImage);
    
    // Append the dish div to the menu container
    menuContainer.appendChild(dishDiv);
  });
  
  
  menuSection.appendChild(heading);
  menuSection.appendChild(menuContainer);
  
  
  const freeTeaDiv = document.createElement('div');
  freeTeaDiv.classList.add('free-tea-container');
  
  
  const freeTeaImage = document.createElement('img');
  freeTeaImage.src = teaImage;  // Use the imported image here
  freeTeaImage.alt = 'Free Breakfast Tea';
  freeTeaImage.classList.add('free-tea-image');
  
  
  const freeTeaMessage = document.createElement('p');
  freeTeaMessage.classList.add('free-tea-message');
  freeTeaMessage.textContent = 'Free breakfast tea every Saturday!';
  
 
  freeTeaDiv.appendChild(freeTeaImage);
  freeTeaDiv.appendChild(freeTeaMessage);
  
  
  menuSection.appendChild(freeTeaDiv);
  
  
  contentDiv.appendChild(menuSection);
}
