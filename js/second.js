console.log('inside second JavaScript file');

const thirdList = document.getElementById('third-list');

const newLi = document.createElement('li');
newLi.innerText = 'Love you Pinkey.Really, I love so much';
thirdList.appendChild(newLi);

const mainBox = document.getElementById('main-box');
const newSection = document.createElement('section');
newSection.innerHTML = `
<h1>My dress List</h1>
<ul>
<li>Denim pant</li>
<li>Denim jacket</li>
<li>Bluecheez Panjabi</li>
</ul>
`
mainBox.appendChild(newSection);