// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

//* Selectors
const container = document.querySelector('.header-container');

function Header() {

//* Create Componment
const header = document.createElement('div');
const date = document.createElement('span');
const head = document.createElement('h1');
const temp = document.createElement('span');

//* Append Child
container.appendChild(header);
header.appendChild(date);
header.appendChild(head);
header.appendChild(temp);

//* Classes
header.classList.add("header");
date.classList.add("date");
temp.classList.add("temp");

//* Data 
date.textContent = "March 28, 2019"
head.textContent = "Lambda Times"
temp.textContent = "98"

return header
}
container.appendChild(Header());
