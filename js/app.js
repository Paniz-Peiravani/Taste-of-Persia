// Function to get an element by its selector
const getElement = (selector) => {
  const element = document.querySelector(selector);

  // Check if the element exists, and if so, return it
  if (element) return element;

  // If the element does not exist, throw an error
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
}

// Get the navigation links element and the navigation button element
const links = getElement('.nav-links'); 
const navBtnDOM = getElement('.nav-btn');

// Add a click event listener to the navigation button
navBtnDOM.addEventListener('click', () => {
  // Toggle the 'show-links' class on the navigation links element
  links.classList.toggle('show-links');
});

// Get the date element and set its content to the current year for the footer
const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;