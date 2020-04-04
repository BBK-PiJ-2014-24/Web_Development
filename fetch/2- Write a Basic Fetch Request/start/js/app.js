const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .catch(err =>  console.log('My Console Error', err))
}

Promise.all([
    fetchData('https://dog.ceo/api/breeds/list'),
    fetchData('https://dog.ceo/api/breeds/image/random')
])
.then(data => {
    const breedList = data[0].message;
    const randomImage = data[1].message;

    generateOptions(breedList);
    generateImage(randomImage);
})    

/*
fetchData('https://dog.ceo/api/breeds/list')
    .then(data => generateOptions(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
    .then(data => generateImage(data.message))

*/

// ----------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response){
    if(response.ok){
        return Promise.resolve(response);
    } else {
        return Promise.reject( new Error(response.statusText));
    }
}

function generateOptions(data){
 const options = data.map( item => `
    <option value=${item}>${item}</option>
    `).join();
    select.innerHTML = options;
}

function generateImage(data){
   const html = `
    <img src='${data}' alt>
    <p>Click to View Images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function fetchBreedImage(){
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click To View More ${breed}s`; 
        })
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit', postData);
// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(event){
       event.preventDefault();
       const name = document.getElementById('name').value;
       const comment = document.getElementById('comment').value; 
       const config =  {
           method: 'POST',
           headers:{
               'Content-Type': 'application/json'
           }, 
           body: JSON.stringify({name: name, comment:comment})
       }

       fetch('https://jsonplaceholder.typicode.com/comments', config)
        .then(checkStatus)
        .then(response => response.json())
        .then(data => console.log(data))
}

