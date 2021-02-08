// You have been assigned to the creation of a Smartphone Shop Website. The homepage you're about to write is just a showcase of the products of the shop with some extra information. No shopping cart / checkout features are required.

// Complete exercises from 1 to 6 with plain HTML.

// EX1.: Add H1 title with the name of the shop

// EX2.: Add a TABLE with the top 5 products of the shop

// EX3.: Each product should have one image, title, description and price

// EX4.: Add the links to Amazon products for each item in the table

// EX5.: Add a footer with the address and the name of the shop

// EX6.: Add a message board where the user can type a message in it

// EXTRA (use JS here)
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀');
  const playground = document.getElementById('jsPlayground');
  for (let i = 0; i < 6; i++) {
    const btn = document.createElement('a');
    btn.classList.add('btn', 'me');
    btn.setAttribute('href', '#');
    btn.innerText = `JS Ex ${i + 1}`;
    playground.appendChild(btn);
  }
});

// EX7.: Write a function to change the H1 text
const changeText = (string, element) => {
  string = document.element.textContent = string;
};
// EX8.: Write a function to change the page background color

// EX9.: Write a function to change the footer address with a fake one

// EX10.: Write a function to add a CSS class to every Amazon link

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

// EX12: Write a function to color the price of every product in a different one every time
