// console.log('append js');
// 1. where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);
// 2. what to be added
const newLi = document.createElement('li');
newLi.innerText = 'Gagar nouka Pahartoli jai';
// 3. add the child
placesList.appendChild(newLi);

// add new li using childNode
const placesBox = document.querySelector('#places-container');
// console.log(placesBox);
const addedLi = document.createElement('li');
addedLi.innerText = 'Rajshahi/Bangladesh';
placesBox.childNodes[3].appendChild(addedLi);

// 1. where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
// 2. what to be added
const newSection = document.createElement('section');
mainContainer.appendChild(newSection);
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
newSection.appendChild(h1);
const ul = document.createElement('ul');
newSection.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Teheri';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3);

// set new section using innner HTML;
const dressSection = document.createElement('section');
mainContainer.appendChild(dressSection);
dressSection.innerHTML = `
<h1>My dress List</h1>
<ul>
<li>Denim pant</li>
<li>Denim jacket</li>
<li>Bluecheez Panjabi</li>
</ul>
`



