const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
function fetchImg() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
        results.message.forEach(image => renderImgs(image))
    });
}
function renderImgs(pic){
    let imgContainer = document.querySelector("#dog-image-container");
    let picEl = document.createElement('img');
    picEl.src = pic;
    imgContainer.appendChild(picEl)
}
function fetchBreed() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    });
}
function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}
  
function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}
  
function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}
  
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}
  

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li');
    li.innerText = breed;
    console.log(breed)
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor)
}
function updateColor(e) {
    e.target.style.color = '#b56fa1'
}


    fetchImg();
    fetchBreed()
