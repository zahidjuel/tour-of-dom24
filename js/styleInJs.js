const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '25px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('blue-bg');
// console.log(placesContainer);
placesContainer.classList.remove('large-text');