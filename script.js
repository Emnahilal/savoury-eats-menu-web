
document.addEventListener('DOMContentLoaded', function() {
  // Menu data
  const menuData = {
    starters: [
      {
        name: "Soupe à l'Oignon",
        description: "Soupe traditionnelle à base d'oignons caramélisés, gratinée avec du gruyère sur croûtons à l'ail.",
        price: "12€"
      },
      {
        name: "Foie Gras de Canard",
        description: "Terrine de foie gras maison accompagnée de pain brioché toasté et chutney de figues.",
        price: "18€"
      },
      {
        name: "Escargots de Bourgogne",
        description: "Escargots préparés avec un beurre à l'ail et aux fines herbes, six ou douze pièces.",
        price: "14€"
      },
      {
        name: "Salade Niçoise",
        description: "Salade composée de thon, œufs durs, olives noires, tomates, poivrons et anchois.",
        price: "16€"
      },
    ],
    mainCourses: [
      {
        name: "Coq au Vin",
        description: "Volaille marinée et braisée lentement dans un vin rouge corsé avec lardons, champignons et oignons.",
        price: "26€"
      },
      {
        name: "Bœuf Bourguignon",
        description: "Ragoût de bœuf mijoté dans du vin rouge avec carottes, oignons et champignons, servi avec purée.",
        price: "28€"
      },
      {
        name: "Bouillabaisse Provençale",
        description: "Soupe de poissons méditerranéens, servie avec rouille, croûtons et fromage râpé.",
        price: "32€"
      },
      {
        name: "Filet de Sole Meunière",
        description: "Filet de sole poêlé au beurre noisette, citron et persil, accompagné de pommes vapeur.",
        price: "30€"
      },
    ],
    desserts: [
      {
        name: "Crème Brûlée",
        description: "Crème à la vanille avec une fine couche de sucre caramélisé.",
        price: "10€"
      },
      {
        name: "Tarte Tatin",
        description: "Tarte aux pommes caramélisées servie tiède avec une boule de glace à la vanille.",
        price: "12€"
      },
      {
        name: "Mousse au Chocolat",
        description: "Mousse légère au chocolat noir, garnie d'éclats de chocolat et servie avec un sablé.",
        price: "11€"
      },
      {
        name: "Assortiment de Fromages",
        description: "Sélection de fromages affinés, accompagnés de fruits secs et pain aux noix.",
        price: "14€"
      },
    ]
  };

  // Function to render menu items
  function renderMenuSection(sectionId, items) {
    const sectionUl = document.querySelector(`#${sectionId} ul`);
    
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'menu-item';
      
      const headerDiv = document.createElement('div');
      headerDiv.className = 'menu-item-header';
      
      const nameH3 = document.createElement('h3');
      nameH3.className = 'menu-item-name';
      nameH3.textContent = item.name;
      
      const priceSpan = document.createElement('span');
      priceSpan.className = 'menu-item-price';
      priceSpan.textContent = item.price;
      
      const descriptionP = document.createElement('p');
      descriptionP.className = 'menu-item-description';
      descriptionP.textContent = item.description;
      
      headerDiv.appendChild(nameH3);
      headerDiv.appendChild(priceSpan);
      
      li.appendChild(headerDiv);
      li.appendChild(descriptionP);
      
      sectionUl.appendChild(li);
    });
  }

  // Render all menu sections
  renderMenuSection('starters', menuData.starters);
  renderMenuSection('mains', menuData.mainCourses);
  renderMenuSection('desserts', menuData.desserts);

  // Create a basic Contact page
  if (window.location.pathname.includes('contact.html')) {
    document.title = 'Contact - Le Savoury Bistro';
    
    // The contact page is already fully HTML in the separate file
    // No JavaScript needed for the static contact page
  }
});

// Let's also add a simple contact.html file
document.createElement('a').href = 'contact.html';
