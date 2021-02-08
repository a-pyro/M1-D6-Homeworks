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
    playground.appendChild(btn);
    switch (i) {
      case 0:
        btn.innerText = `Change H1`;
        btn.classList.add('change-h1');
        btn.addEventListener('click', changeHeading);
        break;
      case 1:
        btn.innerText = `Change Bg Color`;
        btn.classList.add('change-color');
        btn.addEventListener('click', changeBg);

        break;
      case 2:
        btn.innerText = `Fake Footer`;
        btn.classList.add('fake-footer');
        btn.addEventListener('click', changeFooter);

        break;
      case 3:
        btn.innerText = `Toggle Class`;
        btn.classList.add('add-class');
        btn.addEventListener('click', addClass);

        break;
      case 4:
        btn.innerText = `Hide Robots`;
        btn.classList.add('hide-robots');
        btn.addEventListener('click', hideRobots);

        break;
      case 5:
        btn.innerText = `Color Price`;
        btn.classList.add('color-price');
        btn.addEventListener('click', colorPrice);

        break;
    }
  }

  // EX7.: Write a function to change the H1 text
  const changeText = (string, element) => {
    string = document.element.textContent = string;
  };

  // EX8.: Write a function to change the page background color

  const formBtn = document.querySelector('form > a');
  formBtn.addEventListener('click', (e) => {
    const skills = Array.from(
      document.getElementsByClassName('skills')[0].children
    );
    const text = document.getElementById('textArea').value;

    console.log(skills);
    if (text) {
      skills.forEach((skill) => (skill.innerText = text));
    }
    e.preventDefault();
  });

  // EX9.: Write a function to change the footer address with a fake one

  function changeHeading() {
    const heading = document.querySelector('h1');
    heading.innerText = "Sorry I'm late";
  }

  const colors = ['#5b5b5b', '#e97878', '#350b40'];

  function changeBg() {
    const randomColor = colors[Math.floor(Math.random() * 3)];
    document.body.style.backgroundColor = randomColor;
  }

  function changeFooter() {
    document.querySelector('footer').textContent = "i'm very late";
  }

  function addClass() {
    document
      .querySelectorAll('img')
      .forEach((el) => el.classList.toggle('bigger'));
  }

  function hideRobots() {
    document
      .querySelectorAll('img')
      .forEach((el) => el.classList.toggle('hide'));
  }

  function colorPrice() {
    document.querySelector('.prices').style.color =
      colors[Math.floor(Math.random() * 3)];
  }
  // EX10.: Write a function to add a CSS class to every Amazon link

  // EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

  // EX12: Write a function to color the price of every product in a different one every time
});
