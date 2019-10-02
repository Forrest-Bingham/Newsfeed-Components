/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Sign In",
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.  */

const headerMenu = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");

console.log(headerMenu);

function createMenuItem(items) {
  const menuList = document.createElement("div");
  const ul = document.createElement("ul");

  menuList.appendChild(ul);

  menuList.classList.add("menu");

  //set text content

  menuItems.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });

  menuButton.addEventListener("click", event => {
    menuList.classList.toggle("menu--open");
    TweenMax.to(menuList, 3, { x: -75, ease: Bounce.easeOut });
  });

  return menuList;
}
console.log(menuItems);
headerMenu.appendChild(createMenuItem(menuItems));
/*

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
