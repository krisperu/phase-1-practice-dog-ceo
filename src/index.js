// document.addEventListener('DOMContentLoaded', function () {
    // fetchBreed();
//   });
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
        results.message.forEach(breed => renderBreeds(breed))
    });
}


    fetchImg();
   
