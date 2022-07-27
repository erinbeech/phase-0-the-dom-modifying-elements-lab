document.querySelector('main').remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Erin is the champion";
document.body.appendChild(newHeader);