const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Button Event Listener
btn.addEventListener('click', (event) => {
  getJSON(astrosUrl, getProfiles); 
  event.target.remove();
}); 

// Make an AJAX request and use a callback function to generate a particular form of HTML display. 
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

/// The Callback function passed to getProfiles(): Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
    <img src=${data.thumbnail.source}>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
}

// Callback Function passed to getJSON(): use declarative map to go through each profile in the list
function getProfiles(jsondata){
    jsondata.people.map(person => {
      getJSON(wikiUrl + person.name, generateHTML);
    });
}

